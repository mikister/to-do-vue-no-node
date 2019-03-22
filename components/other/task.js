import { TaskTemplate } from '../../templates/other/task-template.js'

const Task = {
    props: {
        'name': String,
        'isChecked': Boolean,
        'importance': Number,
        'dueDate': String
    },
    template: TaskTemplate,
}

export { Task }