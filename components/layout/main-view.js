import { MainViewTemplate } from '../../templates/layout/main-view-template.js'
import { Task } from '../other/task.js'

const MainView = {
    components: {
        'task': Task
    },
    data: function () {
        return {
            currListName: "",
            isMenuOpen: false,
            tasks: []
        }
    },
    methods: {
        displayTasks (newList) {
            this.currListName = newList.name;
            this.tasks = newList.tasks;
        },
        setMenuState (isOpen) {
            this.isMenuOpen = isOpen;
        },
        onToggleTaskSelect (taskIndex) {
            this.$emit("task-toggle-select", taskIndex);
        },
        onTaskToggleCompleted (taskIndex) {
            this.$emit("task-toggle-completed", taskIndex);
        },
        onTaskChangeDueDate (taskIndex, newDueDate) {
            this.$emit("task-change-due-date", taskIndex, newDueDate);
        },
        onTaskChangeImportance (taskIndex, newImportance) {
            this.$emit("task-change-importance", taskIndex, newImportance);
        },
        onTaskMove (taskIndex, newList) {
            this.$emit("task-move", taskIndex, newList);
        },
        onTaskDelete (taskIndex) {
            this.$emit("task-delete", taskIndex);
        },
        unselectAllTasks () {
            this.$children.forEach(component => {
                if (component.$options._componentTag == "task") {
                    if (component.isSelected) {
                        component.toggleTaskSelect();
                    }
                }
            });
        }
    },
    template: MainViewTemplate,
}

export { MainView }