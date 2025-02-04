import mongoose, { model, models, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
   email: string;
   password: string;
   fullName: string;
   isVarified?: boolean;
   bookMarked?: mongoose.Types.ObjectId[]; 
   isEdited?: boolean;
   profileImage?: string;
   _id?: mongoose.Types.ObjectId;
}

const userSchema = new Schema<IUser>({
   email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
   fullName: { type: String, required: true },
   isVarified: { type: Boolean, default: false },
   bookMarked: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog", default: [] }], 
   isEdited: { type: Boolean, default: false },
   profileImage: { type: String, default: "" },
}, { timestamps: true });

userSchema.pre("save", async function (next) {
   if (this.isModified("password") && !this.password.startsWith("$2a$")) {
      // Ensure password isn't already hashed
      this.password = await bcrypt.hash(this.password, 10);
   }
   next();
});

const User = models?.User || model<IUser>("User", userSchema);
export default User;
