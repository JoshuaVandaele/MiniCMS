<template>
    <div>
        <select id="lang_select" v-model="language">
            <option value="fr">&#127467;&#127479;</option>
            <option value="en">&#127468;&#127463;</option>
        </select>
        <component :is="template" :data="pageData"></component>
    </div>
</template>

<style>
#lang_select {
    position: absolute;
    padding: 10px;
    font-size: 16px;
    border: none;
    outline: none;
    background-color: #0C6165;
    cursor: pointer;
    border-radius: 0 0 0 10px;
    right: 0;
}
</style>

<script>
    import json_load from "../data/export.json";

    export default {
        props: ["id"],

        data() {
            return {
                    myJson: json_load,
                    template: null,
                    language: "fr",
            };
        },

        computed: {
            filteredJson() {
                return this.myJson.pages.filter((page) => page.id == this.$route.params.id);
            },

            pageData() {
                return {
                    language: this.language,
                    filteredJson: this.filteredJson[0],
                }
            },
        },

        async mounted() {
            this.template = await this.getTemplate();
        },

        methods: {
            async getTemplate() {
                const templatePath = './template/Template_' + this.filteredJson[0].templateID + '.vue';
                const module = await import(templatePath);
                return module.default;
            },
        },
    };
</script>