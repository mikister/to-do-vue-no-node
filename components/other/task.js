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
            this.$emit("task-toggle-select", this.$props.index);
        },
        toggleCompletedState (event) {
            this.isChecked = !this.isChecked
            event.stopPropagation();
            this.$emit("task-toggle-completed", this.$props.index);
        },
        changeDueDate (newDueDate) {
            this.dueDate = newDueDate;
            this.$emit("task-change-due-date", this.$props.index, newDueDate);
        },
        moveTasktoList (newList) {
            this.$emit("move-task", this.$props.index, newList);
        },
        changeImportance (newImportance) {
            this.importance = newImportance;
            this.$emit("task-change-importance", this.$props.index, newImportance);
        },
        deleteTask () {
            this.$emit("task-delete", this.$props.index, newDueDate);
        },
    },
    template: TaskTemplate,
}

export { Task }