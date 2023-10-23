<script>
import templates_json from "../assets/templates/templates.json";

export default {
    data() {
        return {
            templateID: this.$route.params.templateID,
        };
    },
    mounted() {
        const pages = JSON.parse(localStorage.getItem('pages')) || [];

        pages.push({
            templateID: this.templateID,
            content: templates_json[this.templateID].content,
        });
        localStorage.setItem('pages', JSON.stringify(pages));
        this.$router.push('/edit-page/' + this.templateID);
    },

    methods: {
    }
};
</script>