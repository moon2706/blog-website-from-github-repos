import axios from "axios";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export async function fetchMarkdownContent(fileUrl) { // ✅ Ensure parameter is named correctly
    console.log("Fetching Markdown from:", fileUrl); // Debugging

    try {
        const response = await axios.get(fileUrl);
        return md.render(response.data); // ✅ Correctly parse markdown
    } catch (error) {
        console.error("Error fetching markdown content:", error);
        return "# Error loading content. Please try again later.";
    }
}
