import { useState } from "react";

export default function CommentSection({ postId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const handleSubmit = () => {
        if (!newComment.trim()) return;
        const newEntry = { text: newComment, date: new Date().toISOString() };
        setComments([...comments, newEntry]); // ✅ Stores comments temporarily
        setNewComment("");
    };

    return (
        <div className="comment-section">
            <h3>Comments</h3>
            {comments.length ? (
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            ) : (
                <p>No comments yet.</p>
            )}
            <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Leave a comment..." />
            <button onClick={handleSubmit}>Post Comment</button>
        </div>
    );
}
