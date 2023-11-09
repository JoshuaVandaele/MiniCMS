<template>
    <div>

        <a href="/">
            <img src="../assets/img/logo-port-boulogne-calais.jpg" class="logo">
        </a>
        <div class="navbar">
            <ul>
                <li>
                    <input type="button" id="save" @click="uploadDB()" style="display: none">
                    <label for="save">Save</label>
                </li>
                <li>
                    <input type="file" id="load" accept=".json" @change="switchDB" style="display: none">
                    <label for="load">Load</label>
                </li>
                <li>
                    <input type="button" id="export" style="display: none">
                    <label for="export">Export</label>
                </li>
                <li>
                    <input type="button" id="preview" style="display: none">
                    <label for="preview">Preview</label>
                </li>
            </ul>
        </div>

        <div id="frame">
            <div v-for="page in pages" class="template" @click="redirect(page.id)">
                <img :src="thumbnails[page.templateID]">
                <p>{{ page.content.title ? page.content.title.fr : "Page " + page.id }}</p>
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

.navbar ul li input,
.navbar ul li label {
    width: 210px;
    height: 80px;
    border-radius: 20px;
    background-color: #0C6165;
    position: relative;
    border: none;
    font-size: 32px;
    color: white;
    display: table-cell;
    vertical-align: middle;
}

.navbar ul li input:hover,
.navbar ul li label:hover {
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
import templates_json from "@/assets/templates/templates_info.json";
const thumbnails = import.meta.glob("@/assets/img/thumbnails/*")
import { clearDB, deleteDB, getAllPages, DB_NAME, DB_VERSION } from "../db";
import { exportToJson, importFromJson } from "../idb-backup-and-restore"

export default {
    data() {
        return {
            templates: templates_json,
            pages: [],
            thumbnails: []
        }
    },
    methods: {
        redirect(pageID) {
            this.$router.push(`/page-editor/${pageID}`);
        },
        imageOnError(event) {
            // Définit l'URL de l'image de secours
            event.target.src = 'https://fakeimg.pl/350x200/ff1234,128/000,255/?text=Pas de prévisualisation';
        },
        download(filename, text) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        },
        uploadDB() {
            const conn = indexedDB.open(DB_NAME, DB_VERSION)
            conn.onsuccess = e => {
                const idbDatabase = e.target.result;
                exportToJson(idbDatabase).then((jsonString) => { this.download("project.json", jsonString) }).catch(console.error)
            }
        },
        async switchDB(event) {
            var files = event.target.files;
            if (files.length === 0) {
                console.error('No file is selected');
                return;
            }
            try {
                await deleteDB()
            } catch (e) {
                console.error(e)
            }
            await clearDB()

            var reader = new FileReader();
            reader.onload = function (event) {
                const json = event.target.result
                const conn = indexedDB.open(DB_NAME, DB_VERSION)
                conn.onsuccess = function (e) {
                    const idbDatabase = e.target.result;
                    importFromJson(idbDatabase, json).then(window.location.replace('/selection')).catch(console.error)
                }
            };
            reader.readAsText(files[0]);
        }
    },
    async created() {
        this.pages = await getAllPages();
        for (const thumbnail of Object.values(thumbnails)) {
            const path = await thumbnail()
            this.thumbnails.push(path.default)
        };
    }
}
</script>
