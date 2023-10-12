<template>
    <div class="editTemplate">
        <h1>Template Editor</h1>
        <div class="template">
            <p>Template ID: {{ template_id }}</p>
            <p>Template Data: {{ template_data }}</p>
            <p>Edit template_data["txt"]:</p>
            <textarea v-model="template_data['txt']"></textarea>
        </div>
        <div id="buttons">
            <input type="button" value="Save" @click="saveTemplate">
            <input type="button" value="Load" @click="loadTemplate">
        </div>
    </div>
</template>
<style scoped></style>

<script>
export default {
    // This page needs to load the template from the database and display it on the page, and then allow the user to edit it.
    name: 'editTemplate',
    data() {
        return {
            template_id: NaN,
            template_data: {}
        }
    },
    methods: {
        saveTemplate() {
            // Save the template on the local database
            if (!localStorage.templates) {
                localStorage.templates = JSON.stringify({})
            }
            let templates = JSON.parse(localStorage.templates)
            templates[this.template_id] = this.template_data
            localStorage.templates = JSON.stringify(templates)
        },
        loadTemplate() {
            // Load the template from the database
            if (!localStorage.templates) {
                localStorage.templates = JSON.stringify({})
            }
            let templates = JSON.parse(localStorage.templates)

            this.template_id = this.$route.params.id

            if (!templates[this.template_id]) {
                templates[this.template_id] = {}
            }

            this.template_data = templates[this.template_id]
        }
    },
    mounted() {
        this.loadTemplate()
    }
}
</script>