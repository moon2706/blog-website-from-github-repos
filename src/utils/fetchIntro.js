import axios from "axios";
import { GITHUB_API_URL, GITHUB_TOKEN } from "../config/githubConfig";

export async function fetchIntro() {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/README.md`, {
            headers: { Authorization: `token ${GITHUB_TOKEN}` },
        });

        // GitHub API encodes content → Decode it from Base64
        const decodedIntro = response.data.content ? atob(response.data.content) : "Welcome to MindHaven!";

        return decodedIntro;
    } catch (error) {
        console.error("Error fetching intro:", error);
        return "Welcome to MindHaven!";
    }
}
