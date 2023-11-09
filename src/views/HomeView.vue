<template>
    <div class="accueil">
        <img src="../assets/img/photo-montage-calais-boulogne-2021-4.png">
        <span class="dot">
            <img src="../assets/img/logo-port-boulogne-calais.jpg" class="logo" />
            <img src="../assets/img/portboulognecalais-logo-homepage.png" class="slogan" />
        </span>

        <div id="buttons">
            <button class="button" @click="newProject">Nouveau Projet</button>
            <input type="file" id="upload" accept=".json" @change="openProject" style="display: none">
            <label class="button" for="upload">Ouvrir projet</label>
        </div>
    </div>
</template>

<script>
import { DB_NAME, DB_VERSION, clearDB, deleteDB } from "../db";
import { importFromJson } from "../idb-backup-and-restore"

export default {
    methods: {
        async newProject() {
            try {
                await deleteDB()
            } catch (e) {
                console.error(e)
            }
            await clearDB()
            this.$router.push("/selection-page")
        },
        async loadProject(event) {
            try {
                await deleteDB()
            } catch (e) {
                console.error(e)
            }
            await clearDB()
            var files = event.target.files;
            if (files.length === 0) {
                console.error('No file is selected');
                return;
            }

            var reader = new FileReader();
            reader.onload = function (event) {
                const json = event.target.result
                const conn = indexedDB.open(DB_NAME, DB_VERSION)
                conn.onsuccess = function (e) {
                    const idbDatabase = e.target.result;
                    importFromJson(idbDatabase, json).then(window.location.replace('/selection-page')).catch(console.error)
                }
            };
            reader.readAsText(files[0]);
        }
    },
    mounted() {
        document.getElementById('upload').addEventListener('change', this.loadProject);
    }
}
</script>

<style scoped>
html,
body {
    background-color: #00757c;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}

.accueil {
    width: 100%;
}

img {
    width: 100%;
}

.dot {
    height: 400px;
    width: 400px;
    background-color: #00757c;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -20%);
    text-align: center;
}

.dot .logo {
    height: 40%;
    width: auto;
    transform: translate(0%, 40%);
}

.dot .slogan {
    height: 20%;
    transform: translate(0%, 90%);
}

#buttons {
    text-align: center;
    transform: translate(0%, 0%);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

#buttons button,
#buttons label {
    display: block;
    border-radius: 24px;
    background-color: #0C6165;
    color: white;
    border: none;
    width: 400px;
    height: 100px;
    font-size: 40px;
    margin-top: 5%;
    margin-left: 2%;
    margin-right: 2%;
    padding: 16px;
    font-family: Arial, Helvetica, sans-serif;
}

#buttons .button:hover {
    background-color: #09464a;
    cursor: pointer;
}
</style>