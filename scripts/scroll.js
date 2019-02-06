scrollTo = (element) => {
    window.scroll({
        behavior: "smooth",
        left: 0,
        top: element.offsetTop - 80,
    })
}

document.querySelector(".menu-aboutme").addEventListener("click", function () {
    scrollTo(document.querySelector(".aboutme"))
})

document.querySelector(".menu-skills").addEventListener("click", function () {
    scrollTo(document.querySelector(".skills"))
})

document.querySelector(".menu-contact").addEventListener("click", function () {
    scrollTo(document.querySelector(".contact"))
})

document.querySelector(".menu-portfolios").addEventListener("click", function () {
    scrollTo(document.querySelector(".portfolios"))
})