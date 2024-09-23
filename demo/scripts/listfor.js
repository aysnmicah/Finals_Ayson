const ListRendering = {
        data () {
        return {
            todos: [
            { text: 'Wake-up Early'},
            { text: 'Eat Breakfast' },
            { text: 'Attend WSERVER class' }
            ]
        }
    }
}

Vue.createApp(ListRendering).mount('#list-rendering')