import { ActionPanelTemplate } from '../../templates/layout/action-panel-template.js'

const ActionPanel = {
    data: function () {
        return {
            isActive: false
        }
    },
    methods: {
        openActionPanel () {
            this.isActive = true;
        },
        closeActionPanel () {
            this.isActive = false;
        },

        completeSelectedTask () {
            this.$emit("complete-selected-tasks");
        },
        scheduleSelectedTask () {
            this.$emit("schedule-selected-tasks");
        },
        moveSelectedTask () {
            this.$emit("move-selected-tasks");
        },
        changeImportanceOfSelectedTask () {
            this.$emit("change-importance-selected-tasks");
        }
    },
    template: ActionPanelTemplate
}

export { ActionPanel }