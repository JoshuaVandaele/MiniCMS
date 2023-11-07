<template>
    <div>
        <component :is="template" :data="filteredJson[0]"></component>
    </div>
</template>

<script>
    import json_load from "../data/export.json";

    export default {
        props: ["id"],
        data() {
            return {
                    myJson: json_load,
                    template: null,
            };
        },

        computed: {
            filteredJson() {
                return this.myJson.pages.filter((page) => page.id == this.$route.params.id);
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
