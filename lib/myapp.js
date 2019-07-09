new Vue({
    el: "#app",
    data: {
        page: 0,
        posts: [
            [
                {
                    title: "This Website is done with Vue.js",
                    cover: "img/card_vue.png",
                    content: "I'm a fan of <a href=\"https://vuejs.org/\" target=\"_blank\">Vue.js</a>, as it is great for prototyping for an old html guy like myself. Please don't start a war between React, Angular, Svelte, Vue and others, everyone has his own strength!"
                },
                {
                    title: "The best HTML5 2D game framework",
                    cover: "img/card_phaser.png",
                    style: {
                        width: "auto",
                        height: "200px"
                        
                    },
                    content: "<a href=\"http://phaser.io/examples\" target=\"_blank\">Phaser</a> is a fun, free and fast 2D game framework for making HTML5 games for desktop and mobile web browsers, supporting Canvas and WebGL rendering. And it is open source!"
                }
            ]
        ]
    },
    methods: {
        hello() {
            this.$Message("hello");
        },
        goPage(id) {
            this.page = id;
        }
    }
});