var app = Vue.createApp({
    data(){
        return{
            title: 'Two Way Binding',
            num: '',
            result: '',
        }
    },
    methods:{
        // inputHandale(e){
        //     console.log(typeof e.target.value);
        //     this.num = e.target.value;
        // },
        getDouble(){
            this.result = this.num * 2;
        },
        getSquare(){
            this.result = this.num * this.num;
        },
        addTen(){
            // console.log(typeof this.num );
            this.result = this.num + 10;
        },
        reset(){
            this.num = '';
            this.result = '';
        }
    }
});

app.mount('#app');