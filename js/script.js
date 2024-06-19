document.addEventListener("DOMContentLoaded", function() {
    const text = "Hello, World!";
    const container = document.getElementById("typing-container");
    let index = 0;

    function type() {
        if (index < text.length) {
            container.textContent += text.charAt(index);
            index++;
            setTimeout(type, 200); // Adjust typing speed here
        }
    }


    type();

});