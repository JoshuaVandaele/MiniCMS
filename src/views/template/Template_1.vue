<template>
    <div id="container">
        <a class="a_button" id="next">></a>
        <a class="a_button" id="prev"   >&lt</a>
    </div>
</template>

<style>
body {
    width: 100%;
    height: 100%;
    background-color: #fff;
    margin: 0;
    padding: 0;
    background-image: url("https://i0.wp.com/formation.genie-ecologique.fr/wp-content/uploads/2022/09/placeholder.png?ssl=1");
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