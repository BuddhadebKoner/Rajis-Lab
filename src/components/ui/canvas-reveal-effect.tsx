"use client";

import { cn } from "@/lib/utils";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize = 3,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full">
        <DotMatrix
          colors={colors}
          dotSize={dotSize}
          opacities={opacities}
          shader={`
            float animation_speed_factor = ${animationSpeed.toFixed(1)};
            float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
            opacity *= step(intro_offset, u_time * animation_speed_factor);
            opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
          `}
          center={["x", "y"]}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

interface DotMatrixProps {
  colors: number[][];
  opacities: number[];
  totalSize?: number;
  dotSize: number;
  shader: string;
  center: ("x" | "y")[];
}

const DotMatrix: React.FC<DotMatrixProps> = ({
  colors,
  opacities,
  totalSize = 4,
  dotSize,
  shader,
  center,
}) => {
  const uniforms = useMemo(() => {
    const colorsArray = colors.map((color) =>
      color.map((c) => c / 255)
    );

    return {
      u_colors: { value: colorsArray },
      u_opacities: { value: opacities },
      u_total_size: { value: totalSize },
      u_dot_size: { value: dotSize },
    };
  }, [colors, opacities, totalSize, dotSize]);

  return (
    <Shader
      source={`
        precision mediump float;
        in vec2 fragCoord;

        uniform float u_time;
        uniform float u_opacities[10];
        uniform vec3 u_colors[6];
        uniform float u_total_size;
        uniform float u_dot_size;
        uniform vec2 u_resolution;

        out vec4 fragColor;

        float random(vec2 xy) {
          return fract(sin(dot(xy.xy, vec2(12.9898, 78.233))) * 43758.5453);
        }

        void main() {
          vec2 st = fragCoord.xy;

          ${center.includes("x") ? "st.x -= mod(u_resolution.x, u_total_size);" : ""}
          ${center.includes("y") ? "st.y -= mod(u_resolution.y, u_total_size);" : ""}

          float opacity = 1.0;
          vec2 st2 = floor(st / u_total_size);

          opacity *= u_opacities[int(random(st2) * 10.0)];
          opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
          opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));

          vec3 color = u_colors[int(random(st2) * 6.0)];

          ${shader}

          fragColor = vec4(color, opacity);
        }
      `}
      uniforms={uniforms}
    />
  );
};

const Shader: React.FC<{
  source: string;
  uniforms: Record<string, THREE.IUniform>;
}> = ({ source, uniforms }) => {
  const ref = useRef<THREE.Mesh>(null);
  const { size } = useThree();

  const material = useMemo(() => {
    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        precision mediump float;
        in vec2 position;

        uniform vec2 u_resolution;

        out vec2 fragCoord;

        void main() {
          gl_Position = vec4(position, 0.0, 1.0);
          fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
        }
      `,
      fragmentShader: source,
      uniforms: {
        ...uniforms,
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(size.width, size.height) },
      },
    });
    return shaderMaterial;
  }, [source, uniforms, size]);

  useFrame(({ clock }) => {
    if (ref.current) {
      const material = ref.current.material as THREE.ShaderMaterial;
      if (material.uniforms.u_time) {
        material.uniforms.u_time.value = clock.getElapsedTime();
      }
    }
  });

  return <mesh ref={ref} material={material} />;
};
