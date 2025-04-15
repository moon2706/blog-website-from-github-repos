const axios = require("axios");

const GITHUB_REPO_URL = "https://api.github.com/repos/moon2706/MindHaven/contents/";

async function fetchPostIds() {
    try {
        const response = await axios.get(GITHUB_REPO_URL, { headers: { "User-Agent": "MindHaven-Blog-Fetcher" } });

        if (!response.data || response.data.length === 0) {
            console.warn("⚠️ No Markdown files found in the repository.");
            return [];
        }

        const files = response.data.filter(file => file.name.endsWith(".md"));

        return files.map(file => ({
            postId: file.name.replace(".md", "").replace(/\s+/g, "-").toLowerCase(), // ✅ Normalize postId
            title: file.name.replace(".md", ""),
            url: file.download_url, // ✅ Add direct GitHub download URL
            size: file.size // ✅ Store file size for reference
        }));
    } catch (error) {
        console.error("❌ Error fetching posts from GitHub:", error.message);
        return [];
    }
}

module.exports = { fetchPostIds };
