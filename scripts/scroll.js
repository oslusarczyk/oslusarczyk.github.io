scrollTo = (element) => {
    window.scroll({
        behavior: "smooth",
        left: 0,
        top: element.offsetTop - 80,
    })
}

// desktop
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

//mobile


document.querySelector(".mobile-menu-contact").addEventListener("click", function () {
    scrollTo(document.querySelector(".contact"))
})

document.querySelector(".mobile-menu-examples").addEventListener("click", function () {
    scrollTo(document.querySelector(".portfolios"))
})


document.querySelector(".mobile-menu-skills").addEventListener("click", function () {
    scrollTo(document.querySelector(".skills"))
})

document.querySelector(".mobile-menu-aboutme").addEventListener("click", function () {
    scrollTo(document.querySelector(".aboutme"))
})