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

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
});

document.addEventListener('click', function (e) {
    var target = e.target;
    if (!target.matches('[data-bs-toggle="popover"]') && !target.closest('.popover')) {
        popoverList.forEach(function (popover) {
            popover.hide();
        });
    }
});