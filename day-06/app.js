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
        increment(e,num){
            // this.count = this.count + 1;
            this.count += num;
            console.log(e);
        },
        decrement(num){
            // this.count = this.count + 1;
            this.count -= num;
        },
        test(e){
            console.log('hello');
            console.log(e);
        }
    }
});

app.mount('#app');