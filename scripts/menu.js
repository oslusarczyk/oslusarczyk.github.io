const burger = document.querySelector(".burger");
const activeElement = document.querySelectorAll(".active1");


burger.addEventListener("click", function () {
    for (let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle("show")
    }
})
