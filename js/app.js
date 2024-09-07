const questionDivs = document.querySelectorAll(".tut");

for (let el of questionDivs) {
    const btn = el.querySelector("button");
    const content = el.querySelector(".content");

    btn.addEventListener("click", function() {
        content.classList.toggle("content")
    })
}
