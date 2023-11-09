<template>
    <nav id="editor-nav">
        <button id="back_button" @click="leave">Back</button>
        <button id="save_button" @click="saveData">Save</button>
        <button id="preview_button" @click="previewPage">Preview</button>
        <button id="delete_button" @click="removePage">Delete</button>
        <select id="lang_select" v-model="language">
            <option value="fr">&#127467;&#127479;</option>
            <option value="en">&#127468;&#127463;</option>
        </select>
    </nav>
    <div id="editor-content">
        <component :is="template" :data="pageData"></component>
    </div>
</template>

<script>
import { getPageById, replacePage, getAllPages, deletePage } from "../db";
const EditTemplates = import.meta.glob("../components/templates/EditTemplate_*.vue")
import { toRaw } from "vue";

export default {
    props: ["id"],
    data() {
        return {
            template: null,
            page: {},
            savedPage: {},
            pages: [],
            pageID: Number(this.$route.params.pageID),
            editTemplates: [],
            language: "fr",
        };
    },
    methods: {
        async askForSave() {
            if (JSON.stringify(this.page) != JSON.stringify(this.savedPage) && confirm("Do you want to save your changes?")) {
                await this.saveData();
            }
        },
        async getTemplate() {
            return this.editTemplates[this.page.templateID];
        },
        async saveData() {
            await replacePage(structuredClone(toRaw(this.page)));
            this.savedPage = await getPageById(this.pageID);
        },
        async removePage() {
            if (!confirm("Are you sure you want to delete this page?")) return;
            await deletePage(this.pageID);
            this.$router.push("/selection");
        },
        async previewPage() {
            await this.askForSave();
            window.open(`/template-viewer/${this.pageID}`);
        },
        async leave() {
            await this.askForSave();
            this.$router.push("/selection");
        }
    },
    computed: {
        pageData() {
            return {
                page: this.page,
                pages: this.pages,
                language: this.language
            };
        }
    },
    async created() {
        this.page = await getPageById(this.pageID);
        this.pages = await getAllPages();
        this.savedPage = structuredClone(toRaw(this.page))

        for (const EditTemplate of Object.values(EditTemplates)) {
            const path = await EditTemplate()
            console.log(path.default)
            this.editTemplates.push(path.default)
        };

        this.template = await this.getTemplate();
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