<template>
    <div>
        <select id="lang_select_view" v-model="language">
            <option value="fr">&#127467;&#127479;</option>
            <option value="en">&#127468;&#127463;</option>
        </select>
        <div id="view-content">
            <component :is="template" :data="pageData"></component>
        </div>
    </div>
</template>

<style>
#lang_select_view {
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
import { getPageById } from "../db";

export default {
    props: ["id"],

    data() {
        return {
            template: null,
            language: "fr",
            page: {},
        };
    },

    computed: {
        pageData() {
            return {
                language: this.language,
                filteredJson: this.page,
            }
        },
    },

    async created() {
        this.page = await getPageById(Number(this.$route.params.id));
        this.template = await this.getTemplate();
    },

    methods: {
        async getTemplate() {
            const templatePath = './template/Template_' + this.page.templateID + '.vue';
            const module = await import(templatePath);
            return module.default;
        },
    },
};
</script>