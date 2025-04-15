import axios from "axios"; // ✅ Ensure Axios is imported
import { GITHUB_API_URL, GITHUB_TOKEN } from "../config/githubConfig";


export async function fetchMarkdownFiles() {
    try {
        const response = await axios.get(GITHUB_API_URL, {
            headers: { Authorization: `token ${GITHUB_TOKEN}` }
        });

        return response.data.filter(file => /^\[\d+\]/.test(file.name)); // Only numbered files
    } catch (error) {
        console.error("Error fetching files:", error);
        return [];
    }
}
