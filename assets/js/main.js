const app = new Vue({
    el: '#root',

    data: {
        tasks: [
            'Fare la spesa',
            'Andare in palestra',
            'Imparare VueJs'
        ],

        newTask: '',

        error: false,


        imgUrl: 'https://www.boolean.careers/images/misc/logo.png',

        completedTasks: [],

        trashedTasks: []
    },

    methods: {

        deleteTask(i) {
            this.trashedTasks.push(this.tasks[i]),
                this.tasks.splice(i, 1)
        },

        addTask() {
            if (this.newTask != '' && this.newTask.length > 5) {
                this.tasks.push(this.newTask)
                this.error = false
            } else {
                this.error = true
            }

            this.newTask = ''
        },

        moveTask(i) {
            this.completedTasks.push(this.tasks[i]),
                this.tasks.splice(i, 1)
        },

        redoTask(i) {
            this.tasks.push(this.completedTasks[i]),
                this.completedTasks.splice(i, 1)
        },

        restoreTask(i) {
            this.tasks.push(this.trashedTasks[i]),
                this.trashedTasks.splice(i, 1)

        },

        erase(i) {
            this.trashedTasks.splice(i, 999)
        }
    }
})