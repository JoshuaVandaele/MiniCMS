<template>
    <div v-for="(value, key) in templateJson" :key=value>
        <div v-if="key == 'title'">
            <h1>Titre</h1>
            <h2>Francais</h2>
            <input type="text" v-model="pages[pageID].content.title.fr">
            <h3>Anglais</h3>
            <input type="text" v-model="pages[pageID].content.title.en">
        </div>
        <div v-else-if="key == 'text'">
            <h1>Texte</h1>
            <h2>Francais</h2>
            <textarea v-model="pages[pageID].content.text.fr"></textarea>
            <h3>Anglais</h3>
            <textarea v-model="pages[pageID].content.text.en"></textarea>
        </div>
        <div v-else-if="key == 'background'">
            <h1>Image de fond</h1>
            <input type="file" @change="onImageUpload">
            <img :src="pages[pageID].content.background" id="img_preview">
        </div>
        <div v-else-if="key == 'next'">
            <h1>Prochaine page</h1>
            <input type="number" v-model="pages[pageID].content.next">
        </div>
    </div>

    <input type="submit" value="Sauvegarder" @click="saveData">
</template>


<script>
import templates_json from "../assets/templates/templates_info.json";

export default {
    data() {
        return {
            pages: JSON.parse(localStorage.getItem('pages')),
            pageID: this.$route.params.pageID,
            templates_json: templates_json,
        };
    },

    methods: {
        saveData() {
            localStorage.setItem('pages', JSON.stringify(this.pages));
        },
        onImageUpload(e) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = e => {
                this.pages[this.pageID].content.background = e.target.result;
            };
            reader.readAsDataURL(file);
        },
    },

    computed: {
        filteredJson() {
            return this.myJson.filter(obj => obj.id == this.pages[this.pageID].templateID);
        },
        templateID() {
            return this.pages[this.pageID].templateID;
        },
        templateJson() {
            if (this.templates_json.hasOwnProperty(this.templateID)) {
                return this.templates_json[this.templateID].content;
            } else {
                throw new Error("Template not found: " + this.templateID);
            }
        }
    },
};
</script>