const navigation = document.querySelector("nav")

window.addEventListener("scroll", function () {
    if (window.innerHeight > 800) {
        navigation.classList.add("active")
    }
})