const container = document.getElementById("container");
const imgThree = document.querySelector(".img-3");
const btnJoke = document.querySelector(".btn-joke");
const btnNo = document.querySelector(".btn-no1");

let movementEnabled = true;

function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

btnNo.addEventListener("mouseover", (e) => {
    if (movementEnabled) {
        const containerHeight = container.getBoundingClientRect().height;
        const containerWidth = container.getBoundingClientRect().width;
        const btnHeight = btnNo.getBoundingClientRect().height;
        const btnWidth = btnNo.getBoundingClientRect().width;
        const btnTop = btnNo.getBoundingClientRect().top;
        const btnLeft = btnNo.getBoundingClientRect().left;

        let newTop = btnTop;
        let newLeft = btnLeft;

        while (Math.abs(newTop - btnTop) < containerHeight / 3) {
            newTop = getRandomNumber(0, containerHeight - btnHeight);
        }

        while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
            newLeft = getRandomNumber(0, containerWidth - btnWidth);
        }

        btnNo.style.top = Math.floor(newTop) + "px";
        btnNo.style.left = Math.floor(newLeft) + "px";
    }
});

btnJoke.addEventListener("click", (e) => {
    btnNo.classList.add("hide");
    imgThree.classList.add("hide");
});

setTimeout(() => {
    movementEnabled = false;
}, 10000);