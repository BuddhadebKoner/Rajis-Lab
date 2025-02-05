import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../utils/db";
import Blog from "../../../../model/blogs.";
import User from "../../../../model/user";

// post route to take in a blog post
export async function POST(request: NextRequest) {
   try {
      const { author, title, imageUrl, videoLink, readTime, slugParams, content } = await request.json();
      if (!author) {
         return NextResponse.json(
            { error: "Author is required" },
            { status: 400 }
         );
      }

      if (!title || !imageUrl || !readTime || !slugParams || !content) {
         return NextResponse.json(
            { error: "Properly check all filld is filled !" },
            { status: 400 }
         );
      }

      await connectToDatabase();
      const existingBlog = await Blog.findOne({ slugParams });
      if (existingBlog) {
         return NextResponse.json(
            { error: "chnage the slag value !" },
            { status: 400 }
         );
      }

      await Blog.create({
         author,
         title,
         imageUrl,
         videoLink,
         readTime,
         slugParams,
         content
      });

      return NextResponse.json(
         { message: "Blog created successfully" },
         { status: 201 }
      );

   } catch {
      return NextResponse.json(
         { error: "Faild to create blog" },
         { status: 500 }
      );
   }
}

// get all blogs
export async function GET() {
   try {
      await connectToDatabase();
      const blogs = await Blog.find()
         .populate({ path: "author", model: User, select: "fullName profileImage" })
      
      if (!blogs) { 
         return NextResponse.json(
            { error: "No blogs found" },
            { status: 404 }
         )
      }

      return NextResponse.json({ blogs }, { status: 200 });
   } catch {
      return NextResponse.json({ error: "Failed to get blogs" }, { status: 500 });
   }
}