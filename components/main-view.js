import { MainViewTemplate } from '../templates/main-view-template.js'
import { Task } from './task.js'

const MainView = {
    components: {
        'task': Task
    },
    data: function () {
        return {
            tasks: [
                {
                    name: "Task 1",
                    isChecked: false,
                    importance: 1,
                    dueDate: "16.03.2019"
                },
                {
                    name: "Task 2",
                    isChecked: false,
                    importance: 2,
                    dueDate: "12.03.2019"
                },
                {
                    name: "Task 3",
                    isChecked: false,
                    importance: 3,
                    dueDate: "12.03.2019"
                },
                {
                    name: "Task 4",
                    isChecked: false,
                    importance: 4,
                    dueDate: "12.03.2019"
                },
                {
                    name: "Task 5",
                    isChecked: true,
                    importance: 1,
                    dueDate: "12.03.2019"
                }
            ]
        }
    },
    template: MainViewTemplate,
}

export { MainView }