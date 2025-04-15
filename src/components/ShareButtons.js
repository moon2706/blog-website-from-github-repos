export default function ShareButtons({ url, title }) {
    const encodedTitle = encodeURIComponent(title);
    const encodedURL = encodeURIComponent(url);

    return (
        <div className="share-buttons">
            <a href={`https://twitter.com/share?url=${encodedURL}&text=${encodedTitle}`} target="_blank">🐦 Share on Twitter</a>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedURL}&title=${encodedTitle}`} target="_blank">🔗 Share on LinkedIn</a>
            <a href={`https://www.facebook.com/sharer.php?u=${encodedURL}`} target="_blank">📘 Share on Facebook</a>
        </div>
    );
}
