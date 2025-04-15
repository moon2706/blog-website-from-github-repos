import { useEffect, useState } from "react";
import { fetchIntro } from "../utils/fetchIntro"; // ✅ Fetch intro dynamically
import { fetchMarkdownFiles } from "../utils/fetchMarkdown";
import BlogCard from "../components/BlogCard";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [intro, setIntro] = useState("");
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function loadIntro() {
            const introText = await fetchIntro();
            setIntro(introText);
        }

        async function loadBlogs() {
            const files = await fetchMarkdownFiles();
            const blogPosts = files.map(file => ({
                name: file.name.replace(/^\[\d+\]\s*/, "").replace(".md", ""), // 🔥 Removes numbering & .md
                url: file.download_url,
            }));
            setBlogs(blogPosts);
        }

        loadIntro();
        loadBlogs();
    }, []);

    return (
        <div className={`container ${darkMode ? "dark" : ""}`}>
            {/* ✅ Add logo background overlay */}
            <div className="home-overlay"></div> 
    
            <header>
                <img className='img-index' src="logo_1.png" alt="mindhaven logo"/>
                <button onClick={() => window.location.href = "/about"}>MindHaven Vision</button>
    
                <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
            </header>
    
            <p>
                Welcome to MINDHAVEN — a space dedicated to capturing and sharing innovative ideas 
                that can bring positive change to society. 
            </p>
    
            <hr />
    
            <div className="blog-list">
                {blogs.map(blog => (
                    <BlogCard key={blog.name} title={blog.name} url={blog.url} />
                ))}
            </div>
        </div>
    );
    
}


