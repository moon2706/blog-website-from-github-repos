import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchMarkdownContent } from "../utils/parseMarkdown";

export default function Blog() {
    const router = useRouter();
    const { url } = router.query;
    const [content, setContent] = useState("");

    useEffect(() => {
        async function loadContent() {
            if (!url) return; // Prevents errors on initial render
            console.log("Fetching blog post from:", url); // Debugging

            const markdownContent = await fetchMarkdownContent(url); // ✅ Pass URL properly
            setContent(markdownContent);
        }

        loadContent();
    }, [url]);

    return (
        <div>
            <h1>Blog Post</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}
