<template>
    <video>
        <source src="https://youtu.be/dQw4w9WgXcQ?si=_2qBYXwW7meJZdLO" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div id="container">
        <h1></h1>
        <p></p>
        <a class="a_button" id="next">></a>
        <a class="a_button" id="prev">&lt</a>
        <a class="a_button" id="play" onclick="playVideo()">&#9654; Lecture</a>
    </div>
    <div id="background-blur"></div>
</template>

<style>
body {
    width: 100%;
    height: 100%;
    background-color: #fff;
    margin: 0;
    padding: 0;
    position: absolute;
}

#container {
    width: 100%;
    height: auto;
    background-color: white;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}

h1 {
    background-color: #0C6165;
    color: white;
    margin: 0;
    padding: 8px;
    font-size: 64px;
}

p {
    border: 1px solid #000;
    color: black;
    padding: 8px;
    margin: 8px;
    font-size: 32px;
}

.a_button {
    background-color: #FF0000;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 32px;
    font-weight: bolder;
    border-radius: 90px;
    text-transform: uppercase;
}

#next {
    padding: 8px;
    padding-left: 64px;
    padding-right: 64px;
    float: right;
    margin-right: 8px;
    margin-bottom: 8px;
}

#prev {
    padding: 8px;
    padding-left: 64px;
    padding-right: 64px;
    float: right;
    margin-right: 8px;
    margin-bottom: 8px;
}

#play {
    padding: 8px;
    padding-left: 64px;
    padding-right: 64px;
    float: left;
    margin-left: 8px;
    margin-bottom: 8px;
}

video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
}

#background-blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(10px) opacity(0.75);
    background-color: #000;
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s linear, visibility 0.5s linear;
}
</style>

<script>
const firstVideoElement = document.querySelector("video");
const playButton = document.getElementById('play');
const backgroundBlur = document.getElementById('background-blur');

// Function to start playing the video and to blur the background
function playVideo(videoElement) {
    videoElement.play();
    videoElement.controls = true;
    backgroundBlur.style.visibility = 'visible';
    backgroundBlur.style.opacity = '1';
    videoElement.style.zIndex = '1';
}

function stopVideo(videoElement) {
    videoElement.pause();
    videoElement.controls = false;
    videoElement.currentTime = 0;

    backgroundBlur.style.visibility = 'hidden';
    backgroundBlur.style.opacity = '0';
    videoElement.style.zIndex = '0';

}

// Add a click event listener to the button
playButton.addEventListener('click', function () {
    playVideo(firstVideoElement)
});

firstVideoElement.addEventListener('click', function () {
    stopVideo(firstVideoElement)
});

backgroundBlur.addEventListener('click', function () {
    stopVideo(firstVideoElement)
});

firstVideoElement.addEventListener('ended', function () {
    stopVideo(firstVideoElement)
});
</script>