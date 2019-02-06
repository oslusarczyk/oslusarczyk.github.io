const text = 'front-end web developer'
const paragraph = document.querySelector(".background p")

const textIndex = [...text]

let index = 0;

const animation = () => {
    paragraph.textContent += text[index];
    index++;

    if (index == 23) clearInterval(indexInterval);

}
const indexInterval = setInterval(animation, 200)