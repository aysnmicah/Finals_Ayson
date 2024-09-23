const books = Vue.createApp ({
    data () {
        return {
            showBooks: true,
            btitle: 'Harry Potter',
            bauthor: 'Micah Ayson',
            year: 2008
    }
},
methods: {
toggleShowBooks(){
    this.showBooks = !this.showBooks
    }
}
});
books.mount ('#books')