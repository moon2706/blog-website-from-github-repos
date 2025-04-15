# MindHaven Blog Platform 🚀  
A dynamic blogging platform that **integrates GitHub APIs**, allows users to interact through **likes, dislikes, and comments**, and features a sleek UI optimized for readability.

## 🔹 Features  
✅ **Fetch blog posts directly from a GitHub repository**  
✅ **Interactive UI with real-time likes/dislikes/comments**  
✅ **Optimized markdown rendering for clean formatting**  
✅ **Smooth loading experience with a custom spinning logo**  
✅ **Minimal local storage without a database (for now)**  

# 🌟 Acknowledgements
**Inspired by clean blog UI/UX concepts**

**Markdown rendering via React Markdown**

**Loading animation crafted with CSS keyframes**

# 🔮Future Improvements
🗄️ **Integrate MongoDB/PostgreSQL for data persistence**

🔄 **Enable real-time syncing with WebSockets**

🔐 **Add user authentication (OAuth2 / JWT)**

📝 **Implement role-based comment moderation**

📊 **Add analytics for post engagement metrics**


# 🚧 Challenges & Solutions
🧩 **GitHub Markdown Fetching**

✔ **Used the GitHub REST API to dynamically fetch .md files**

✔ **Parsed markdown content into HTML using react-markdown**

⚡ **Real-time Interactions Without Reload**

✔ **Replaced reload-based logic with useState & useEffect**
✔ **State-driven UI provides seamless feedback to users**

 🎨 **Background Styling**
 
✔ **Resolved blur & transparency issues**
✔ **Used filter: opacity(0.1) on background layer, not content**

# 💻 Technologies Used
**Next.js – Frontend framework for dynamic rendering**

**Express.js – Lightweight backend API for blog interactions**

**GitHub API – To fetch markdown blog files dynamically**

**React Hooks – Real-time state management**

**CSS Animations – Custom loader and UI animations**

# 🔗 API Endpoints

**Method	Endpoint	Description**

**GET	/post/:postId	Fetch blog post details**

**POST	/like/:postId	Increase post likes**

**POST	/dislike/:postId	Increase post dislikes**

**POST	/comment/:postId	Add a new comment**

⚠️ Note: As of now, all interactions are stored in local state variables and reset upon page reload.
