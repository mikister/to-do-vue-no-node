import { TaskTemplate } from '../../templates/other/task-template.js'

const Task = {
    props: {
        'name': String,
        'index': Number,
        'isChecked': Boolean,
        'importance': Number,
        'dueDate': String
    },
    data: function () {
        return {
            isSelected: false
        }
    },
    methods: {
        toggleTaskSelect () {
            this.isSelected = !this.isSelected;
            this.$emit("toggle-task-select", this.$props.index);
        },
        changeCompletedState (event) {
            this.isChecked = !this.isChecked
            event.stopPropagation();
        }
    },
    template: TaskTemplate,
}

export { Task }