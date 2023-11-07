<script>
import templates_json from "../assets/templates/templates_info.json";
import { addPage } from "../db";

export default {
    data() {
        return {
            templateID: this.$route.params.templateID,
        };
    },
    mounted() {
        addPage({
            templateID: this.templateID,
            content: templates_json[this.templateID].content,
        })

        this.$router.push('/edit-page/' + this.templateID);
    },

    methods: {
    }
};
</script>