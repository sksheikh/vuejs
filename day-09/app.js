var app = Vue.createApp({
    data(){
        return{
            title: 'Class Binding',
            divColor: 'red',
            
        }
    },
    methods:{
        getColor(color){
            this.divColor = color;
        },
    }
});

app.mount('#app');