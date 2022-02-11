const app = Vue.createApp({
    // data, function
    // template: '<h2>I\'m a template</h2>'
    data() {
        return {
            showBooks: true,
            books : [
                {title: 'Henry the sea', name: 'Lalala'},
                {title: 'By the way', name: 'Orig'},
                {title: 'Obanan yuton', name: 'Penata'},
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