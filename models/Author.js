import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    bio: {
      type: String,
      required: true,
      trim: true,
    },
    profileImage: {
      type: String, // URL of the profile image
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    website: {
      type: String,
    },
    socialLinks: {
      twitter: { type: String },
      facebook: { type: String },
      linkedin: { type: String },
      github: { type: String },
    },
    metaTitle: {
      type: String,
      required: true,
    },
    metaDescription: {
      type: String,
      required: true,
    },
    metaKeywords: {
      type: [String], // SEO keywords
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Prevent model re-compilation in Next.js
export default mongoose.models.Author || mongoose.model("Author", AuthorSchema);