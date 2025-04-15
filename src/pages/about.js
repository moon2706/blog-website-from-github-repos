import { useEffect, useState } from "react";
import { fetchMarkdownContent } from "../utils/parseMarkdown";

export default function About() {
    const [content, setContent] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        async function loadContent() {
            const readmeContent = await fetchMarkdownContent("https://raw.githubusercontent.com/moon2706/MindHaven/main/README.md");
            setContent(readmeContent);
        }
        loadContent();
    }, []);

    return (
        <div className={`container ${darkMode ? "dark" : ""}`}>
            <header>
            <img className='img-about' src="logo_0.png" alt="mindhaven logo"/>
                <h1>MindHaven Vision</h1> {/* 🔹 Title similar to blog page */}
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

        </div>
    );
}
