const app = Vue.createApp({
    // data, function
    // template: '<h2>I\'m a template</h2>'
    data() {
        return {
            url:'https://google.com.vn',
            showBooks: true,
            books : [
                {title: 'Henry the sea', name: 'Lalala', img: 'assets/1.jpg'},
                {title: 'By the way', name: 'Orig', img: 'assets/2.jpg'},
                {title: 'Obanan yuton', name: 'Penata', img: 'assets/3.jpg'},
            ]
        }
    },
    methods: {
        toogleBooks(){
            this.showBooks = !this.showBooks
        }
    },
})

app.mount('#app')