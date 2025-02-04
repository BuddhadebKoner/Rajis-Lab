import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../utils/db";
import User from "../../../../../model/user";


export async function POST(request: NextRequest) {
   try {
      const { email, password, fullName } = await request.json()
      // console.log(email, password);

      if (!email || !password || !fullName) {
         return NextResponse.json(
            { error: "Email and password are requird" },
            { status: 400 }
         )
      }


      await connectToDatabase();
      const existingUser = await User.findOne({ email })
      if (existingUser) {
         return NextResponse.json(
            { error: "User Allready exist ." },
            { status: 400 }
         )
      }

      await User.create({
         email,
         password,
         fullName
      })

      return NextResponse.json(
         { message: "User register sucessfully" },
         { status: 201 }
      )

   } catch (error) {
      return NextResponse.json(
         { error: "Faild to register users" },
         { status: 500 }
      )
   }
}