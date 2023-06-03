var app = Vue.createApp({
    data(){
        return{
            title: 'Event Modifier',
            name : '',
        }
    },
    methods:{
        printName(e){
            console.log(e.target.value);
            this.name = e.target.value;
        },
        formSubmit(e){
            // console.log(e.preventDefault());
        },
        divClick(e){
            console.log(e);
            console.log('div click')
        },
        clickBtn(e){
            console.log(e);
            console.log('click btn')
        }
    }
});

app.mount('#app');