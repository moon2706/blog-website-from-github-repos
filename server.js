const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000", // ✅ Allows frontend access
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

// ✅ Placeholder for blog posts, since MongoDB is removed temporarily
const blogPosts = {}; 

app.post("/like/:postId", async (req, res) => {
    blogPosts[req.params.postId] = blogPosts[req.params.postId] || { likes: 0, dislikes: 0, comments: [] };
    blogPosts[req.params.postId].likes++;
    res.json({ likes: blogPosts[req.params.postId].likes });
});

app.post("/dislike/:postId", async (req, res) => {
    blogPosts[req.params.postId] = blogPosts[req.params.postId] || { likes: 0, dislikes: 0, comments: [] };
    blogPosts[req.params.postId].dislikes++;
    res.json({ dislikes: blogPosts[req.params.postId].dislikes });
});

app.post("/comment/:postId", async (req, res) => {
    blogPosts[req.params.postId] = blogPosts[req.params.postId] || { likes: 0, dislikes: 0, comments: [] };
    blogPosts[req.params.postId].comments.push({ text: req.body.text, date: new Date() });
    res.json({ comments: blogPosts[req.params.postId].comments });
});

app.listen(5000, () => console.log("✅ Server running on port 5000 without MongoDB"));
