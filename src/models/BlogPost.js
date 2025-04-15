const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    postId: { type: String, required: true, unique: true }, // ✅ Ensures postId is unique and required
    title: { type: String, required: true }, // ✅ Guarantees a title exists
    likes: { type: Number, default: 0, min: 0 }, // ✅ Prevents negative like counts
    dislikes: { type: Number, default: 0, min: 0 }, // ✅ Prevents negative dislike counts
    views: { type: Number, default: 0, min: 0 }, // ✅ Tracks views correctly
    comments: [{ text: String, date: { type: Date, default: Date.now } }], // ✅ Ensures timestamps for comments
}, { timestamps: true }); // ✅ Adds `createdAt` & `updatedAt` fields automatically

const BlogPost = mongoose.model("BlogPost", blogSchema);
module.exports = BlogPost;
