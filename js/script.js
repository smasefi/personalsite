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

function generateRandomSongURI() {
    const songs = [
        '5VGlqQANWDKJFl0MBG3sg2', 
        '2tgQaL85WoRfgEa4hFQgrE',
        '6kopmMZiyLmw7h66uXcXR7',
        '003vvx7Niy0yvhvHt4a68B',
        '1170VohRSx6GwE6QDCHPPH' ,
        '0bM1z18RQpr61UuI1LemIK',
        '7MRyJPksH3G2cXHN8UKYzP',
        '0fCwTrRNfoNk962ati8n2K',
        '0ofHAoxe9vBkTCp2UQIavz',
        '6Fqf0OTfB9VPfYk2HfBhPn',
        '2hnMS47jN0etwvFPzYk11f',
        '7e89621JPkKaeDSTQ3avtg',
        '7BDbyDs5FUmnh955RABFd7',
        '0qRR9d89hIS0MHRkQ0ejxX',
        '2grjqo0Frpf2okIBiifQKs',
        '0q21FNwES2bbtcduB6kjEU',
        '5RsUlxLto4NZbhJpqJbHfN',
        '3wcluZHyfuTzIXHfwXVAIE',
        '1Lo0QY9cvc8sUB2vnIOxDT',
        '58ge6dfP91o9oXMzq3XkIS'      
    ];
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
}

function updateSpotifySong() {
    const spotifyIframe = document.getElementById('spotify-iframe');
    const randomSongURI = generateRandomSongURI();
    spotifyIframe.src = `https://open.spotify.com/embed/track/${randomSongURI}?utm_source=generator`;
}

document.getElementById('generate-song-btn').addEventListener('click', updateSpotifySong);
