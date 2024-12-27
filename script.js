// script.js
const countdown = () => {
    const endDate = new Date("2025-01-06T11:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        updateFlipCard(".time-unit:nth-child(1) .flip-card", days);
        updateFlipCard(".time-unit:nth-child(2) .flip-card", hours);
        updateFlipCard(".time-unit:nth-child(3) .flip-card", minutes);
        updateFlipCard(".time-unit:nth-child(4) .flip-card", seconds);
    }
};

const updateFlipCard = (selector, value) => {
    const flipCard = document.querySelector(selector);
    const top = flipCard.querySelector(".top");
    const bottom = flipCard.querySelector(".bottom");

    if (top.textContent !== value.toString().padStart(2, "0")) {
        bottom.textContent = top.textContent;
        top.textContent = value.toString().padStart(2, "0");
        flipCard.classList.add("flip");
        setTimeout(() => flipCard.classList.remove("flip"), 600);
    }
};

setInterval(countdown, 1000);
