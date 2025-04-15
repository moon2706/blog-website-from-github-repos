import { useEffect, useState } from "react";
import { fetchMarkdownFiles } from "../utils/fetchMarkdown";
import BlogCard from "../components/BlogCard";

export default function Home() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function loadBlogs() {
            const files = await fetchMarkdownFiles();
            const blogPosts = files.map(file => ({
                name: file.name.replace(/^\[\d+\]\s*/, "").replace(".md", ""), // Remove numbering
                url: file.download_url,
            }));
            setBlogs(blogPosts);
        }
        loadBlogs();
    }, []);
    return (
        <div className="container">
            <h1>My Blog</h1>
            <div className="blog-list">
                {blogs.map(blog => (
                    <BlogCard key={blog.name} title={blog.name} url={blog.url} />
                ))}
            </div>
        </div>
    );
}
