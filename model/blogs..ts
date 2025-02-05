import mongoose, { model, models, Schema } from "mongoose";

export interface IBlogs {
   author: mongoose.Types.ObjectId;
   title: string;
   imageUrl: string;
   videoLink?: string;
   readTime: string;
   slugParams: string;
   isPublished: boolean;
   isEdited?: boolean;
   content: { type: string, value: string }[];
}

const blogSchema = new Schema<IBlogs>({
   author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
   },
   title: { type: String, required: true },
   imageUrl: { type: String, required: true },
   videoLink: { type: String, default: null },
   readTime: { type: String, required: true },
   slugParams: { type: String, required: true, unique: true },
   isPublished: { type: Boolean, default: false },
   isEdited: { type: Boolean, default: false },
   content: [{
      type: { type: String, enum: ["text", "code", "heading", "bold", "highlight"], required: true },
      value: { type: String, required: true },
   }],
}, { timestamps: true });

const Blog = models?.Blog || model<IBlogs>("Blog", blogSchema);
export default Blog;
