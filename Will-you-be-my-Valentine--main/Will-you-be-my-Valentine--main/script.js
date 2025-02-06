const messages = [
    "huu betulan tdk?",
    "kodong btulan ini huhu??",
    "Ah sedihkan ini nu (:?",
    "maaf dih nanti belikan kih coklat (:",
    "maaf kasar di kita ",
    "takut jaka kehilangan kita",
    "jadi saling memaafkan maki",
    "kusayangki betulan nu",
    "jadi mau kih dih perbaiki ?.",
    "pleas bilang yes ❤️",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}