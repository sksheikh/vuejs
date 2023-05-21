var app = Vue.createApp({
    data(){
        return{
            title: 'method & event',
            count: 0,
        }
    },
    methods:{
        printName(){
            return 'sheikh';
        },
        increment(){
            // this.count = this.count + 1;
            this.count++;
        },
        decrement(){
            // this.count = this.count + 1;
            this.count--;
        }
    }
});

app.mount('#app');