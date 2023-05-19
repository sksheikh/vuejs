var app = Vue.createApp({
    data(){
        return{
            msg : 'Vuejs3 Tutorial',
            personalInfo: {
                name : 'sheikh',
                age : 27,
                gitHub: 'https://github.com/sksheikh/vuejs',
                htmlCode : '<h2>Learn more from <a href="https://github.com/sksheikh/vuejs">here </a></h2>',
            }
        }
    }
});

app.mount('#app');