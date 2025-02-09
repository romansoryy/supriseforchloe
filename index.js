function getQueryParam(name){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    document.body.appendChild(heart);
}

function sendLove(){
    let name = getQueryParam("name") || "Someone Special";
    let message = document.getElementById("message")
    message.innerHTML = `Roman Loves ${name}!`;
    setTimeout(() => {
        message.style.opacity = 1;
    }, 100);

    for (let i = 0; i < 100; i++) {
        setTimeout(createHeart, i * 200);
    }
}


sendLove();
