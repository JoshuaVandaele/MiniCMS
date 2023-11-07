<script>
import templates_json from "../assets/templates/templates_info.json";
import { addPage, getLastPage } from "../db";

export default {
    data() {
        return {
            templateID: this.$route.params.templateID,
        };
    },
    async mounted() {
        addPage({
            templateID: this.templateID,
            content: templates_json[this.templateID].content,
        })

        const added_page = await getLastPage()
        console.log(added_page)

        this.$router.push('/page-editor/' + added_page.id);
    },

    methods: {
    }
};
</script>