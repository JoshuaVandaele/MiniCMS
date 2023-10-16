<template>
    <div>
        <div v-for="data in filteredJson" :key="data.id">
            <div v-for="content in data.content" :key="content.id">
                <div v-if="content == 'textbox'"><input type="textbox"></div>
                <div v-if="content == 'number'"><input type="number" min="1"></div>
                <div v-if="typeof content === 'object'">
                    <div v-for="language in content" :key="language.id">
                        <div v-if="language == 'textarea'"><textarea></textarea></div>
                    </div>
                </div>
                <div v-if="content == 'img'"><input type="file" accept="image/png, image/jpeg"></div>
            </div>
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
                return this.myJson.filter(data => data.id == this.$route.params.id);
            },
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