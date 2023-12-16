// Replace 'YOUR_API_KEY' with your YouTube Data API v3 key
const apiKey = "AIzaSyC5l-RLCM57s8gkiUlXqTq52Idljp3TU-A";
const videoId = "6W9zME3qshs";

// Load the YouTube API script
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'modestbranding': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    // You can add custom logic here based on the player state
}

// Load the YouTube API
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Load YouTube API and initialize the player
loadYouTubeAPI();
