import { ActionPanelTemplate } from '../../templates/layout/action-panel-template.js'

const ActionPanel = {
    data: function () {
        return {
            isActive: false,
            selectedDueDate: "",
            selectedImportance: 2,
            moveTarget: 1
        }
    },
    methods: {
        openActionPanel () {
            this.isActive = true;
        },
        closeActionPanel () {
            this.isActive = false;
        },

        selectedTaskComplete () {
            this.$emit("action-panel-tasks-complete");
        },
        selectedTaskChangeDueDate () {
            this.$emit("action-panel-tasks-change-due-date", this.selectedDueDate);
        },
        selectedTaskChangeImportance () {
            this.$emit("action-panel-tasks-change-importance", this.selectedImportance);
        },
        selectedTaskMove () {
            this.$emit("action-panel-tasks-move", this.moveTarget);
        },
        selectedTaskDelete () {
            this.$emit("action-panel-tasks-delete");
        }
    },
    template: ActionPanelTemplate
}

export { ActionPanel }