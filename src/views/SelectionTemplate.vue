<template>
    <div id="template-picker">
        <div id="template-picker-topbar">
            <router-link to="/selection" id="template-picker-close-button">X</router-link>
        </div>
        <div id="template-picker-scrollarea">
            <div v-for="template in templates" id="template">
                <img :src="template.thumbnail" @click="redirect(template.indexOf(item))">
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    background: black;
}

#template {
    position: relative;
    width: 200px;
    height: 120px;
    border-radius: 20px;
    margin: 10px;
    display: inline-block;
}

#template-picker {
    width: 50vw;
    height: 60vh;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 3px solid #00757c;
    border-radius: 2px 2px 10px 10px;
}

#template-picker-topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10%;
    background-color: #00757c;
}

#template-picker-scrollarea {
    height: 100%;
    overflow-y: scroll;
    background-color: #fafafa;
    width: 90%;
    height: 75%;
    margin: 2.5% auto 0 auto;
    position: relative;
}

#template-picker-scrollarea img {
    width: 80%;
    height: auto;
    margin: 10px;
    display: grid;
}

#template-picker-close-button {
    color: red;
    text-decoration: none;
    font-size: 2rem;
    margin-right: 1rem;
    font-weight: bold;
    font-family: sans-serif;
    text-align: right;
    width: 100%;
}
</style>



<script>
import templates_json from "../assets/templates/templates_info.json";

export default {
    name: 'listeTemplate',
    data() {
        return {
            templates: templates_json
        }
    },
    methods: {
        redirect(index) {
            this.$router.push('/create-page/' + index);
        }
    }
}
</script>
