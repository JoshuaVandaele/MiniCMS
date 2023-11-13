<template>
    <input type="file" id="vid" @change="handleVideoChange" />
    <label for="vid" id="vid-label">Importer un fichier</label>
    <video>
        <source id="vid-source" :src="data.page.content.video" class="video-transition">
        Your browser does not support the video tag.
    </video>
    <div id="container">
        <input type="text" id="title"
            :value="data.language == 'fr' ? data.page.content.title.fr : data.page.content.title.en"
            @change="handleTitleEdit" />

        <input type="textarea" id="text"
            :value="data.language == 'fr' ? data.page.content.text.fr : data.page.content.text.en"
            @change="handleTextEdit" />

        <select id="next" v-model="data.page.content.next">
            <option selected></option>
            <option v-for="(page, index) in data.pages" :key="index" :value="page.id">{{
                page.content.title ? (data.language == 'fr' ? page.content.title.fr : page.content.title.en) : "Page " +
                page.id }} &gt;</option>
        </select>
        <select id="prev" v-model="data.page.content.prev">
            <option selected></option>
            <option v-for="(page, index) in data.pages" :key="index" :value="page.id">&lt; {{
                page.content.title ? (data.language == 'fr' ? page.content.title.fr : page.content.title.en) : "Page " +
                page.id }}</option>
        </select>
        <a class="a_button" id="play" @click="playVideo">&#9654; Lecture</a>
    </div>
    <div id="background-blur"></div>
</template>

<style>
#container textarea,
#container input {
    font-family: inherit;
}

#editor-content {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    margin: 0;
    padding: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
}

#container {
    width: 100%;
    height: auto;
    background-color: white;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}

#title {
    background-color: #0C6165;
    color: white;
    margin: 0;
    padding: 16px;
    font-size: 64px;
    display: block;
    width: 100%;
    box-sizing: border-box;
}

#text {
    border: 1px solid #000;
    color: black;
    padding: 8px;
    margin: 8px;
    font-size: 32px;
    display: block;
    width: 99%;
    box-sizing: border-box;
}

#container select {
    background-color: #FF0000;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 32px;
    font-weight: bolder;
    border-radius: 90px;
    text-transform: uppercase;
    width: 20%;
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

#vid {
    display: none;
}

#vid-label {
    width: 25%;
    background-color: #FFF;
    border: 1px solid #000;
    color: #333;
    padding: 16px;
    text-align: center;
    font-size: 32px;
    font-weight: bolder;
    position: absolute;
    border-radius: 8px;
    top: 50%;
    left: 50%;
    margin: -12.5% 0 0 -12.5%;
    z-index: 2;
}

#vid-label::before {
    content: url('/src/assets/import.svg');
    width: 32px;
    padding-right: 8px;
    height: auto;
    display: inline-block;
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
            required: true,
        },
    },

    mounted() {
        this.firstVideoElement = document.querySelector("video");
        this.playButton = document.getElementById('play');
        this.backgroundBlur = document.getElementById('background-blur');

        this.playButton.addEventListener('click', this.playVideo);

        this.firstVideoElement.addEventListener('click', this.stopVideo);

        this.firstVideoElement.addEventListener('ended', this.stopVideo);

        this.backgroundBlur.addEventListener('click', this.stopVideo);

        this.updateVideo();
    },

    methods: {
        handleTitleEdit(event) {
            if (this.data.language == "fr") {
                this.data.page.content.title.fr = event.target.value;
            } else {
                this.data.page.content.title.en = event.target.value;
            }
        },
        handleTextEdit(event) {
            if (this.data.language == "fr") {
                this.data.page.content.text.fr = event.target.value;
            } else {
                this.data.page.content.text.en = event.target.value;
            }
        },
        handleVideoChange(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                this.data.page.content.video = e.target.result;
                this.updateVideo();
            };
            reader.readAsDataURL(file);
        },
        updateVideo() {
            document.getElementById("vid-source").setAttribute("src", this.data.page.content.video);
            this.firstVideoElement.load();
        },
        playVideo() {
            this.firstVideoElement.controls = true;
            this.backgroundBlur.style.visibility = 'visible';
            this.backgroundBlur.style.opacity = '1';
            this.firstVideoElement.style.zIndex = '2';
            this.firstVideoElement.play();
        },

        stopVideo() {
            this.firstVideoElement.pause();
            this.firstVideoElement.controls = false;
            this.firstVideoElement.currentTime = 0;

            this.backgroundBlur.style.visibility = 'hidden';
            this.backgroundBlur.style.opacity = '0';
            this.firstVideoElement.style.zIndex = '0';

        }
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