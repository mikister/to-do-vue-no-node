import { MainViewTemplate } from '../../templates/layout/main-view-template.js'
import { Task } from '../other/task.js'
import { TitleEditable } from '../other/title-editable.js'

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