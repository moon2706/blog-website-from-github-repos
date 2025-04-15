import { useState, useEffect } from "react";

export default function BlogActions({ postId }) {
    const [likes, setLikes] = useState(3);
    const [dislikes, setDislikes] = useState(0);
    const [title, setTitle] = useState("Loading...");

    useEffect(() => {
        if (!postId) {
            console.error("❌ postId is undefined, skipping fetch!");
            return;
        }

        const samplePost = {
            postId,
            title: postId.replace(/-/g, " "),
            likes: Math.max(3, Math.floor(Math.random() * 100)), // ✅ Ensure likes are at least 3
            dislikes: Math.floor(Math.random() * 20),
        };

        // ✅ Enforce rule: Likes must always be at least 1/3 more than dislikes
        while (samplePost.likes < Math.ceil(samplePost.dislikes * (4 / 3))) {
            samplePost.likes++;
        }

        console.log("✅ Simulated Post Data:", samplePost);
        setTitle(samplePost.title);
        setLikes(samplePost.likes);
        setDislikes(samplePost.dislikes);
    }, [postId]);

    const handleLike = () => {
        setLikes((prevLikes) => Math.max(prevLikes + 1, Math.ceil(dislikes * (4 / 3))));
    };

    const handleDislike = () => {
        setDislikes((prevDislikes) => {
            const newDislikes = prevDislikes + 1;
            return newDislikes < likes * (3 / 4) ? newDislikes : prevDislikes; // ✅ Prevent dislikes from exceeding allowed threshold
        });
    };

    return (
        <div className="blog-actions">
            {/* <h3>{title}</h3> */}
            <button onClick={handleLike}>👍 {likes}</button>
            <button onClick={handleDislike}>👎 {dislikes}</button>
        </div>
    );
}
