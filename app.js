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
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book)=> book.isFav)
        }
    }
})

app.mount('#app')

// Challenge - Add to Favs
//  - attach a click envent to each li tag (for each book)
//  - when a user click an li, toggle the 'isFav' property of that book