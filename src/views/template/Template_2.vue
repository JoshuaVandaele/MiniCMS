<template>
    <div id="container">
        <h1> {{ data.language == "en" ? data.filteredJson.content.title.en : data.filteredJson.content.title.fr }}</h1>
        <p>{{ data.language == "en" ? data.filteredJson.content.text.en : data.filteredJson.content.text.fr }}</p>
        <a class="a_button" id="next" :href="data.filteredJson.content.next" v-if="data.filteredJson.content.next !== null && data.filteredJson.content.next !== ''">&gt;</a>
        <a class="a_button" id="prev" :href="data.filteredJson.content.prev" v-if="data.filteredJson.content.prev !== null && data.filteredJson.content.prev !== ''">&lt;</a>
        <a class="a_button" id="play">&#9654; Jouer</a>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            required: true,
        },
    },
};
</script>

<style>
body {
    width: 100%;
    height: 100%;
    background-color: #fff;
    margin: 0;
    padding: 0;
    background-image: url("/Placeholder.png");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

#container {
    width: 100%;
    height: auto;
    background-color: white;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}

h1 {
    background-color: #0C6165;
    color: white;
    margin: 0;
    padding: 8px;
    font-size: 64px;
}

p {
    border: 1px solid #000;
    color: black;
    padding: 8px;
    margin: 8px;
    font-size: 32px;
}

.a_button {
    background-color: #FF0000;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 32px;
    font-weight: bolder;
    border-radius: 90px;
    text-transform: uppercase;
}

#next {
    padding: 8px;
    padding-left: 64px;
    padding-right: 64px;
    float: right;
    margin-right: 8px;
    margin-bottom: 8px;
}

#play {
    padding: 8px;
    padding-left: 64px;
    padding-right: 64px;
    float: left;
    margin-left: 8px;
    margin-bottom: 8px;
}

#prev {
    padding: 8px;
    padding-left: 64px;
    padding-right: 64px;
    float: right;
    margin-right: 8px;
    margin-bottom: 8px;
}
</style>