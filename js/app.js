const questionDivs = document.querySelectorAll(".qa");

for (let el of questionDivs) {
    const btn = el.querySelector("button");
    const answer = el.querySelector(".answer");

    btn.addEventListener("click", function() {
        answer.classList.toggle("answer")
    })
}
