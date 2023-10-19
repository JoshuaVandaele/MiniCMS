<template>
    <div v-for="data in filteredJson" :key="data.id">
        <div v-for="(content, key) in data.content" :key="key">

            <label v-if = "typeof content !== 'object'"> {{ key }} </label>

            <input type="textbox" v-if="content == 'textbox'">

            <input type="number" min="1" v-if="content == 'number'">

            <div v-if="typeof content === 'object'">
                <div v-for="(language, langKey) in content" :key="langKey">
                    <label>{{ langKey }}</label>
                    <div ><textarea v-if="language == 'textarea'"></textarea></div>
                </div>
            </div>

            <div v-if="content == 'img'"><input type="file" accept="image/png, image/jpeg"></div>
        </div>
        <input type="submit" value="Sauvegarder" @click="saveData">
    </div>

</template>


<script>
import json_load from '../assets/templates/templates.json';
import fs from 'fs';
export default {
    data() {
        return {
            myJson: json_load,
        };
    },

    methods: {
        saveData() {
            const dataToSave = JSON.stringify(this.myJson);
            fs.writeFile('data.json', dataToSave, (err) => {
                if (err) throw err;
                console.log('Data saved to file');
            });
        },

        handleFileUpload(event, item) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
            item.src = reader.result;
        };
        reader.readAsDataURL(file);
    },
    },

    computed: {
        filteredJson() {
            return this.myJson.filter(obj => obj.id == this.$route.params.id);
        },
    },
};
</script>