import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchMarkdownContent } from "../utils/parseMarkdown";

import BlogActions from "../components/BlogActions";
import CommentSection from "../components/CommentSection";
import ShareButtons from "../components/ShareButtons";

export default function Blog() {
    const router = useRouter();
    const { url } = router.query;
    const [content, setContent] = useState("");
    const [darkMode, setDarkMode] = useState(false);
    const [title, setTitle] = useState("");
    const [postId, setPostId] = useState("");

    useEffect(() => {
        async function loadContent() {
            if (!url) return;

            const markdownContent = await fetchMarkdownContent(url);
            setContent(markdownContent);

            const fileName = decodeURIComponent(url.split("/").pop()) // ✅ Extract post title
                .replace(".md", "") 
                .replace(/^\[\d+\]\s*/, "");

            setTitle(fileName);
            setPostId(fileName.replace(/\s+/g, "-").toLowerCase()); // ✅ Generate `postId`
        }

        loadContent();
    }, [url]);

    return (
        <div className={`container ${darkMode ? "dark" : ""}`}>
            <header>
                <h1>{title}</h1>
                <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
            </header>

            <div className="container">
            {/* ✅ Add overlay before blog content */}
            <div className="blog-overlay"></div>

                <div className="blog-content">
                    {content ? (
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    ) : (
                        <div className="loading-animation">
                            <img src="/logo_0.png" alt="Loading..." />
                        </div>
                    )}
                </div>
            </div>

            {postId ? (
                <>
                    <BlogActions postId={postId} /> {/* ✅ Pass extracted postId */}
                    <CommentSection postId={postId} />
                </>
            ) : (
                <div className="loading-animation">
                    <img src="/logo_0.png" alt="Loading..." />
                </div>
            )}

            <ShareButtons url={url} title={title} />
        </div>
    );
}
