<template>
    <div>
        <img src="../assets/img/logo-port-boulogne-calais.jpg" class="logo">
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
            <div v-for="item in liste" class="template">
                <img v-bind:src="item.img">
                <p>
                    {{ item.titre }}
                </p>
            </div>
        </div>
        <router-link to="/selection-template" id="add_button">+</router-link>
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
    height: 75%;
    margin: 0 auto;
    overflow: scroll
}

#add_button {
    background-color: #00757c;
    position: absolute;
    text-decoration: none;
    text-align: center;
    margin: 0 auto;
    height: 70px;
    width: 70px;
    border-radius: 25%;
    border: none;
    color: white;
    font-size: 60px;
    bottom: 80px;
    right: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
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
export default {
    name: 'DetailsPokemon',
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
