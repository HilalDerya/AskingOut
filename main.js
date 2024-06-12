const container = document.getElementById("container");
const imgOne = document.querySelector(".img-1");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

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

btnYes.addEventListener("click", (e) => {
    btnNo.classList.add("hide");
    imgOne.classList.add("hide");
});

setTimeout(() => {
    movementEnabled = false;
}, 15000);