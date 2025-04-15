import { useRouter } from "next/router";
import BlogActions from "../../components/BlogActions";

export default function BlogPage() {
    const router = useRouter();
    const { url } = router.query; // ✅ Extract URL from query params

    if (!url) return <p>Loading post...</p>; // ✅ Prevent undefined errors

    // ✅ Extract postId from URL by removing GitHub path and formatting it
    const postId = url.split("/").pop().replace(".md", "").replace(/\s+/g, "-").toLowerCase();

    console.log("Extracted postId:", postId); // 🔍 Debugging log

    return <BlogActions postId={postId} />;
}
