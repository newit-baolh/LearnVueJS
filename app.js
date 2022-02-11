const app = Vue.createApp({
    // data, function
    // template: '<h2>I\'m a template</h2>'
    data() {
        return {
            url:'https://google.com.vn',
            showBooks: true,
            books : [
                {title: 'Henry the sea', name: 'Lalala', img: 'assets/1.jpg', isFav: true},
                {title: 'By the way', name: 'Orig', img: 'assets/1.jpg', isFav: false},
                {title: 'Obanan yuton', name: 'Penata', img: 'assets/1.jpg', isFav: true},
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