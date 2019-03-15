import { MainViewTemplate } from '../templates/main-view-template.js'
import { Task } from './task.js'

const MainView = {
    components: {
        'task': Task
    },
    data: function () {
        return {
            tasks: []
        }
    },
    methods: {
        displayTasks (newTasks) {
            this.tasks = newTasks;
        }
    },
    template: MainViewTemplate,
}

export { MainView }