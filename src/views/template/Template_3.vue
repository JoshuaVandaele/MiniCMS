<template>
    <video>
        <source :src="data.content.video" type="video/mp4" class="video-transition">
        Your browser does not support the video tag.
    </video>
    <div id="container">
        <h1>{{ data.content.title }}</h1>
        <p>{{ data.content.text }}</p>
        <a class="a_button" id="prev" :href="data.content.next" v-if="data.content.next">></a>
        <a class="a_button" id="prev" :href="data.content.previous" v-if="data.content.previous">&lt;</a>
        <a class="a_button" id="play" @click="playVideo">&#9654; Lecture</a>
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
    cursor: pointer;
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

.video-transition {
    transition: all 0.5s ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
    },

    mounted () {
        this.firstVideoElement = document.querySelector("video");
        this.playButton = document.getElementById('play');
        this.backgroundBlur = document.getElementById('background-blur');

        this.playButton.addEventListener('click', function () {
            this.playVideo(this.firstVideoElement)
        });

        this.firstVideoElement.addEventListener('click', function () {
            this.stopVideo(this.firstVideoElement)
        });

        this.backgroundBlur.addEventListener('click', function () {
            this.stopVideo(this.firstVideoElement)
        });

        this.firstVideoElement.addEventListener('ended', function () {
            this.stopVideo(this.firstVideoElement)
        });

        this.backgroundBlur.addEventListener('click', this.closeVideo);

    },

    methods: {
        playVideo() {
            this.firstVideoElement.controls = true;
            this.backgroundBlur.style.visibility = 'visible';
            this.backgroundBlur.style.opacity = '1';
            this.firstVideoElement.style.zIndex = '2';
        },

        stopVideo() {
            this.firstVideoElement.pause();
            this.firstVideoElement.controls = false;
            this.firstVideoElement.currentTime = 0;

            this.backgroundBlur.style.visibility = 'hidden';
            this.backgroundBlur.style.opacity = '0';
            this.firstVideoElement.style.zIndex = '1';

            this.firstVideoElement.classList.remove('video-transition');
            this.firstVideoElement.style.zIndex = '-1';

        },

        closeVideo() {
            this.stopVideo();
        },
    },

    data() {
        return {
            firstVideoElement: null,
            playButton: null,
            backgroundBlur: null,
        };
    }
};
</script>