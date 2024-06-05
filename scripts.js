document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("homepage").classList.remove("hidden");
});

function nextPage(pageId) {
    const current = document.querySelector(".page:not(.hidden)");
    current.classList.add("hidden");
    document.getElementById(pageId).classList.remove("hidden");
}

function reject() {
    const noButtons = document.querySelectorAll("button[id^='noButton']");
    noButtons.forEach(button => {
        const emojis = Array(5).fill('👉').join(' ');
        button.innerHTML = emojis + ' Yes ' + emojis;
    });
}
