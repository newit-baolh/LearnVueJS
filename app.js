const app = Vue.createApp({
    // data, function
    // template: '<h2>I\'m a template</h2>'
    data() {
        return {
            title: 'The final Empire',
            name: 'Book',
            date: '11/2/2022',
            age: 10
        }
    },
    methods: {
        changeTitle(title){
            // this.title = ' The story of Mine'
            this.title = title
        }
    },
})

app.mount('#app')