<template>
    <div id="container_2">
        <a class="a_button" id="next" :href="data.filteredJson.content.next" v-if="data.filteredJson.content.next !== null && data.filteredJson.content.next !== ''">&gt;</a>
        <a class="a_button" id="prev" :href="data.filteredJson.content.prev" v-if="data.filteredJson.content.prev !== null && data.filteredJson.content.prev !== ''">&lt;</a>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            required: true,
        },
    },

    mounted() {
        document.getElementById("view-content").style.backgroundImage = `url(${this.data.filteredJson.content.background})`;
    },
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
    background-size: 100% ;
}

#container_2 {
    width: 100%;
    height: auto;
    position: absolute;
    background-color: initial;
    bottom: 0;
    overflow: hidden;
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