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
            ],
            [
                {
                    title: "Remember the GUI time with Swing? Hell no...",
                    cover: "img/card_electron.png",
                    content: "When you build a Graphical User Interface (GUI), it should be OS-independent (Hail to <a href=\"https://en.wikipedia.org/wiki/Swing_(Java)\" target=\"_blank\">Java Swing</a>!), otherwise you'll need to build the same GUI of your app for every OS, that's just silly. So, what is the most recognized GUI standard langugage? Of course HTML! And <a href=\"https://electronjs.org/\" target=\"_blank\">Electron</a> is just the way to a better GUI life🏖️"
                },
                {
                    title: "Want to kill system process with Electron?",
                    cover: "img/card_electron_kill.png",
                    content: "<a href=\"https://electronjs.org/\" target=\"_blank\">Electron</a> is awesome (Thanks to <a href=\"https://nodejs.org/en/\" target=\"_blank\">Node.js</a>👏👏👏), so your desktop app built by Electron can deeply cooperate with your OS, you can even run a Jetty server at the background! But be careful when you want to kill the process, since the command is a little different between Windows and Mac/Linux. <img src=\"img/kill_process.png\" class=\"card-content-image\"/>"
                }
            ],
            [
                {
                    title: "Who rules Internet data file format? JSON!",
                    cover: "img/card_arduinojson.png",
                    style: {
                        width: "auto",
                        height: "200px"

                    },
                    content: "Does Arduino need JSON? <a href=\"https://arduinojson.org/\" target=\"_blank\">Yes!</a>"
                }
            ],
            [
                {
                    title: "One of the best things with Apache Struts",
                    cover: "img/card_struts.png",
                    content: "Since any (well, almost all) Java web framework is running on top of Java EE (i.e. Servlet), and Servlet feels still a little bit low level, so Apache Struts encapsulates Servlet and just provide a little bit more ease for life. Btw, use <a href=\"https://struts.apache.org/plugins/convention/\" target=\"_blank\">Annotation</a> instead of XML, you will feel the breeze from declarative programming."
                }
            ],
            [
                {
                    title: "Retro Game on iPads",
                    cover: "img/card_retro.png",
                    content: "Maybe the best <a href=\"https://www.retroarch.com\" target=\"_blank\">simulator</a>!"
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
