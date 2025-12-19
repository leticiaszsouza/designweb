document.addEventListener('alpine:init', () => {
    Alpine.store('tasks', {
        items: [
            { id: 1, title: 'Estudar Alpine.js', done: true },
            { id: 2, title: 'Criar Store Global', done: true },
            { id: 3, title: 'Finalizar atividade', done: true },
        ],
        add(title) {
            if (!title.trim()) return
            this.items.push({
                id: Date.now(),
                title,
                done: false
            })
        },

        remove (id) {
            this.items = this.items.filter(items => items.id !== id)
        }
    })
})