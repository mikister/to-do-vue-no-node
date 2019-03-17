import { MainViewTemplate } from '../templates/main-view-template.js'
import { Task } from './task.js'
import { TitleEditable } from './title-editable.js'

const MainView = {
    components: {
        'task': Task,
        'editable-title': TitleEditable
    },
    data: function () {
        return {
            currListName: "",
            tasks: []
        }
    },
    methods: {
        displayTasks (newList) {
            this.currListName = newList.name;
            this.tasks = newList.tasks;
            this.$refs.title.changeTitle(newList.name);
        },
        onTitleChange (value) {
            this.$emit("title-change", value);
        }
    },
    template: MainViewTemplate,
}

export { MainView }