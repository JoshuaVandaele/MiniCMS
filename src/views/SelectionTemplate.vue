<template>
    <div id="template-picker">
            <div id="template-picker-topbar">
                <router-link to="/selection" id="template-picker-close-button">X</router-link>
            </div>
            <div  id="template-picker-scrollarea">
                <div v-for="item in liste" id="template">
                    <img v-bind:src="item.img">
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
    display:grid;
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
export default {
    name: 'listeTemplate',
    data() {
        return {
            liste: [{
                img: "https://fakeimg.pl/350x200/ff0000,128/000,255",
                modele: "1",
                titre: "titre"
            },
            {
                img: "https://fakeimg.pl/350x200/ff1234,128/000,255",
                modele: "2",
                titre: "titre2"
            },
            {
                img: "https://fakeimg.pl/350x200/ff1234,128/000,255",
                modele: "3",
                titre: "titre3"
            },
            {
                img: "https://fakeimg.pl/350x200/ff1234,128/000,255",
                modele: "4",
                titre: "titre4"
            },
            {
                img: "https://fakeimg.pl/350x200/ff1234,128/000,255",
                modele: "5",
                titre: "titre5"
            },
            {
                img: "https://fakeimg.pl/350x200/ff1234,128/000,255",
                modele: "6",
                titre: "titre6"
            },
            {
                img: "https://fakeimg.pl/350x200/ff1234,128/000,255",
                modele: "7",
                titre: "titre7"
            },
            {
                img: "https://fakeimg.pl/350x200/ff1234,128/000,255",
                modele: "8",
                titre: "titre8"
            },
            {
                img: "https://fakeimg.pl/350x200/ff1234,128/000,255",
                modele: "9",
                titre: "titre9"
            },
            {
                img: "https://fakeimg.pl/350x200/ff1234,128/000,255",
                modele: "10",
                titre: "titre10"
            }
        ]
        }
    },
}
</script>
