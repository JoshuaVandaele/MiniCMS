<template>
    <nav id="editor-nav">
        <button id="back_button" @click="$router.push('/selection')">Back</button>
        <button id="save_button" @click="saveData">Save</button>
        <button id="preview_button" @click="$router.push(`/template-viewer/${pageID}`)">Preview</button>
        <select id="lang_select" v-model="language">
            <option value="fr">&#127467;&#127479;</option>
            <option value="en">&#127468;&#127463;</option>
        </select>
    </nav>
    <div>
        <component :is="template" :data="pageData"></component>
    </div>
</template>

<script>
export default {
    props: ["id"],
    data() {
        return {
            template: null,
            pages: JSON.parse(localStorage.getItem('pages')),
            pageID: this.$route.params.pageID,
            language: "fr",
        };
    },

    async mounted() {
        this.template = await this.getTemplate();
    },

    methods: {
        async getTemplate() {
            console.log(this.pages)
            console.log(this.pageID)
            const templatePath = `./template/EditTemplate_${this.pages[this.pageID].templateID}.vue`;
            const module = await import(templatePath);
            return module.default;
        },
        saveData() {
            localStorage.setItem('pages', JSON.stringify(this.pages));
        },
    },

    computed: {
        pageData() {
            return {
                pages: this.pages,
                page: this.pages[this.pageID],
                language: this.language
            };
        }
    }
};
</script>

<style>
#editor-nav {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
}

#editor-nav button {
    padding: 10px;
    font-size: 16px;
    border: none;
    outline: none;
    background-color: greenyellow;
    cursor: pointer;
}

#editor-nav button:hover {
    background-color: green;
}

#editor-nav select {
    padding: 10px;
    font-size: 16px;
    border: none;
    outline: none;
    background-color: greenyellow;
    cursor: pointer;
    border-radius: 0px;
}

#back_button {
    border-radius: 0 0 0 10px;
}
</style>