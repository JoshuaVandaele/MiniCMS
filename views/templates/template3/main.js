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