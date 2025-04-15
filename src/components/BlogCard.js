import Link from "next/link";

export default function BlogCard({ title, url }) {
    return (
        <div className="blog-card">
            <h2>{title}</h2>
            <Link href={`/blog?url=${encodeURIComponent(url)}`}>
                <button>Read More</button>
            </Link>
        </div>
    );
}
