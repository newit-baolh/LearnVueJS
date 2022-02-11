const app = Vue.createApp({
    // data, function
    // template: '<h2>I\'m a template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The final Empire',
            name: 'Book',
            date: '11/2/2022',
            age: 10,
            x : 0,
            y : 0
        }
    },
    methods: {
        changeTitle(title){
            // this.title = ' The story of Mine'
            this.title = title
        },
        toggleBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e,data){
            // console.log('event');
            console.log(e, e.type);
            if(data){
                console.log(data);
            }
        },
        handleMousemove(e){
            // console.log(e);
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
})

app.mount('#app')