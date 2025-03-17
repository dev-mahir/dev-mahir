import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    metaTitle: { type: String, required: true, trim: true },
    metaDescription: { type: String, required: true, trim: true },
    metaKeywords: { type: [String], required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author", // Reference to Author model
      required: true,
    },
    content: { type: String, required: true },
    featuredImage: { type: String, required: true },
    categories: { type: [String], required: true },
    tags: { type: [String], required: true },
    publishedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    views: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
    allowComments: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.BlogPost || mongoose.model("BlogPost", BlogPostSchema);