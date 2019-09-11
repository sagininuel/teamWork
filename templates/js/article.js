const article = document.querySelector("#middle-container ul");

// Delete a post
article.addEventListener("click", e => {
    if (e.target.className == "delete") {
        const li = e.target.parentElement;
        console.log(li);

        li.parentNode.removeChild(li);
    }
});