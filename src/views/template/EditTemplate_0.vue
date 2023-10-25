<template>
    <input type="file" id="background" @change="handleBackgroundChange" />
    <label for="background" id="background-label">Importer un fichier</label>
    <div id="container">
        <input type="text" id="title"
            :value="data.language == 'fr' ? data.page.content.title.fr : data.page.content.title.en"
            @change="handleTitleEdit" />
        <textarea id="text"
            @change="handleTextEdit">{{ data.language == "fr" ? data.page.content.text.fr : data.page.content.text.en }}</textarea>
        <select id="next" v-model="data.page.content.next">
            <option selected></option>
            <option v-for="(page, index) in data.pages" :key="index" :value="index">{{ data.language == 'fr' ?
                page.content.title.fr : page.content.title.en }} &gt;</option>
        </select>
        <select id="prev" v-model="data.page.content.prev">
            <option selected></option>
            <option v-for="(page, index) in data.pages" :key="index" :value="index">&lt; {{ data.language == 'fr' ?
                page.content.title.fr : page.content.title.en }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            required: true,
        },
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
        handleBackgroundChange(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                this.data.page.content.background = e.target.result;
                document.body.style.backgroundImage = `url(${this.data.page.content.background})`;
            };
            reader.readAsDataURL(file);
        },
    },

    mounted() {
        document.body.style.backgroundImage = `url(${this.data.page.content.background})`;
    }
};
</script>


<style>
#container textarea,
#container input {
    font-family: inherit;
}

body {
    width: 100%;
    height: 100%;
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

#background {
    display: none;
}

#background-label {
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
}

#background-label::before {
    content: url('/src/assets/import.svg');
    width: 32px;
    padding-right: 8px;
    height: auto;
    display: inline-block;
}
</style>