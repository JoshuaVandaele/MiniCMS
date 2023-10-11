<template>
    <div class="accueil">
        <img src="../assets/img/photo-montage-calais-boulogne-2021-4.png">
        <span class="dot">
            <img src="../assets/img/logo-port-boulogne-calais.jpg" class="logo" />
            <img src="../assets/img/portboulognecalais-logo-homepage.png" class="slogan" />
        </span>

        <div id="buttons">
            <input type="button" value="Add Template" @click="$router.push('/selection')">
            <input type="button" value="Charger" @click="$router.push('/selection-template')">
        </div>
    </div>
</template>
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
}

#buttons input {
    border-radius: 24px;
    background-color: #0C6165;
    color: white;
    border: none;
    width: 20%;
    height: 7%;
    font-size: 40px;
    margin-top: 7%;
    margin-left: 2%;
    margin-right: 2%;
}

#buttons input:hover {
    background-color: #09464a;
}
</style>