<template>
    <div>

        <a href="/">
            <img src="../assets/img/logo-port-boulogne-calais.jpg" class="logo">
        </a>
        <div class="navbar">
            <ul>
                <li><input type="button" value="Save"></li>
                <li><input type="button" value="Load"></li>
                <li><input type="button" value="Export"></li>
                <li><input type="button" value="Option"></li>
                <li><input type="button" value="Preview"></li>
            </ul>
        </div>

        <div id="frame">
            <div v-for="page in pages" class="template" @click="redirect(pages.indexOf(page))">
                <img :src="templates[page.templateID].thumbnail">
                <p>{{ page.content.title.fr }}</p>
            </div>
            <router-link to="/selection-template" id="add_button">+</router-link>
        </div>
    </div>
</template>

<style scoped>
body {
    margin: 0;
    background-color: #00757c;
}

.logo {
    width: 180px;
    height: 117px;
    top: 8px;
    left: 8px;
    position: absolute;
}

.navbar ul {
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
    margin-top: 2%;
    margin-bottom: 2%;
}

.navbar ul li {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
}

.navbar ul li input {
    width: 210px;
    height: 80px;
    border-radius: 20px;
    background-color: #0C6165;
    position: relative;
    border: none;
    font-size: 48;
    color: white;
}

.navbar ul li input:hover {
    background-color: #094549;
}

#frame {
    position: relative;
    background-color: white;
    width: 90%;
    height: 75vh;
    margin: 0 auto;
    overflow: scroll;
}

#add_button {
    background-color: #00757c;
    position: absolute;
    text-decoration: none;
    height: 70px;
    width: 70px;
    text-align: center;
    vertical-align: middle;
    line-height: 58px;
    border-radius: 25%;
    color: white;
    font-size: 60px;
    bottom: 3%;
    right: 1%;
}

#add_button:hover {
    background-color: #094549;
}

.template {
    position: relative;
    width: 200px;
    height: 120px;
    border-radius: 20px;
    margin: 10px;
    display: inline-block;
}

.template img {
    width: 192px;
    height: 108px;
    border-radius: 20px;
}

.template p {
    color: black;
    text-align: center;
    margin: 8px;
}
</style>

<script>
import templates_json from "../assets/templates/templates_info.json";

export default {
    name: 'DetailsPokemon',
    data() {
        return {
            pages: JSON.parse(localStorage.getItem('pages')),
            templates: templates_json,
        }
    },
    methods: {
        redirect(model) {
            //Function used to redirect the user to the model managing page
            window.location.href = '/edit-page/' + model;//https://stackoverflow.com/questions/35664550/vue-js-redirection-to-another-page
        },
        imageOnError(event) {
            // Définit l'URL de l'image de secours
            event.target.src = 'https://fakeimg.pl/350x200/ff1234,128/000,255/?text=Pas de prévisualisation';
        }
    }
}
</script>
