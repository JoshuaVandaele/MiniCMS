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
    </div>

</template>


<script>
import json_load from '../assets/templates/templates.json';
export default {
    // This page needs to load the template from the database and display it on the page, and then allow the user to edit it.
    data() {
        return {
            myJson: json_load,
        };
    },

    computed: {
        filteredJson() {
            return this.myJson.filter(obj => obj.id == this.$route.params.id);
        },
    },
};
</script>