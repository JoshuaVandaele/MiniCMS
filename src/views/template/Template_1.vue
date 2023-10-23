<template>
    <div id="container">
        <a class="a_button" id="prev" :href="data.content.next" v-if="data.content.next">></a>
            <a class="a_button" id="prev" :href="data.content.previous" v-if="data.content.previous">&lt;</a>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
    },

    mounted () {
        document.body.style.backgroundImage = 'url("/src/assets/img/' + this.data.content.background +'")';
    }
};
</script>

<style>
body {
    width: 100%;
    height: 100%;
    background-color: #fff;
    margin: 0;
    padding: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% ;
}

#container {
    width: 100%;
    height: auto;
    background-color: white;
    position: absolute;
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