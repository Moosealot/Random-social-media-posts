function displayPosts(posts) {
    const postList = document.getElementById("post-list");

    postList.innerHTML = "";

    posts.forEach(post => {
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        h1.textContent = post.title;
        p.textContent = post.body;

        li.appendChild(h1);
        li.appendChild(p);
        postList.appendChild(li);
    });
}

async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}

function getRandomPosts(posts, count = 5) {
    const shuffled = [...posts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

document.getElementById("randomBtn").addEventListener("click", async () => {
    const posts = await getPosts();
    const randomPosts = getRandomPosts(posts, 5);
    displayPosts(randomPosts);
});