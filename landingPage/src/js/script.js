document.addEventListener("DOMContentLoaded", function () {
    const text = "Bem vindo a Taverna Virtual";
    let index = 0;
    const typingSpeed = 100;

    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, typingSpeed);
        }
    }

    typeEffect();
});

