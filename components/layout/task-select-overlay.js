import { TaskSelectOverlayTemplate } from '../../templates/layout/task-select-overlay-template.js'

const TaskSelectOverlay = {
    data: function () {
        return {
            isActive: false,
            selectedTasksNum: 0
        }
    },
    methods: {
        openTaskSelect (selectedTasksNum) {
            this.isActive = true;
            this.selectedTasksNum = selectedTasksNum;
        },
        closeTaskSelect (emitEvent) {
            this.isActive = false;
            console.log('F');
            if (emitEvent) {
                this.$emit("close-task-select");
            }
        }
    },
    template: TaskSelectOverlayTemplate
}

export { TaskSelectOverlay }