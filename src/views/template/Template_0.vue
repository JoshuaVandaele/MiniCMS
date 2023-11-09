<template>
    <div id="container">
        <h1> {{ data.language == "en" ? data.filteredJson.content.title.en : data.filteredJson.content.title.fr }}</h1>
        <p>{{ data.language == "en" ? data.filteredJson.content.text.en : data.filteredJson.content.text.fr }}</p>
        <a class="a_button" id="next" :href="data.filteredJson.content.next"
            v-if="data.filteredJson.content.next !== null && data.filteredJson.content.next !== ''">&gt;</a>
        <a class="a_button" id="prev" :href="data.filteredJson.content.prev"
            v-if="data.filteredJson.content.prev !== null && data.filteredJson.content.prev !== ''">&lt;</a>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            required: true
        },
    },

    mounted() {
        document.getElementById("view-content").style.backgroundImage = `url(${this.data.filteredJson.content.background})`;
    },
    created() {

        console.log(this.data)
    }
};
</script>


<style>
#view-content {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    margin: 0;
    padding: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
}

#container {
    width: 100%;
    height: auto;
    background-color: white;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}

#view-content h1 {
    background-color: #0C6165;
    color: white;
    margin: 0;
    padding: 8px;
    font-size: 64px;
}

#view-content p {
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

#prev {
    padding: 8px;
    padding-left: 64px;
    padding-right: 64px;
    float: right;
    margin-right: 8px;
    margin-bottom: 8px;
}
</style>