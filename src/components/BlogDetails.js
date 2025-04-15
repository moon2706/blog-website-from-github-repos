import { useState, useEffect } from "react";

const samplePost = {
    postId: "ai-smart-basket-checkout",
    title: "AI Smart Basket Checkout",
    likes: 0,
    dislikes: 0,
    views: 0,
    comments: [],
};

export default function BlogDetails({ postId }) {
    const [post, setPost] = useState(samplePost);

    useEffect(() => {
        if (postId) {
            setPost({ ...samplePost, postId }); // ✅ Loads static blog data
        }
    }, [postId]);

    return (
        <div>
            <h2>{post.title}</h2>
            <p>Likes: {post.likes}</p>
            <p>Dislikes: {post.dislikes}</p>
            <p>Views: {post.views}</p>
            <h3>Comments</h3>
            {post.comments.length ? (
                <ul>
                    {post.comments.map((comment, index) => (
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            ) : (
                <p>No comments yet.</p>
            )}
        </div>
    );
}
