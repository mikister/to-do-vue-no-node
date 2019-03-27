import { ActionPanelTemplate } from '../../templates/layout/action-panel-template.js'

import { ImportancePicker } from '../other/importance-picker.js'

const ActionPanel = {
    components: {
        'importance-picker': ImportancePicker
    },
    data: function () {
        return {
            isActive: false,
            selectedDueDate: "",
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

        openImportancePicker () {
            this.$refs.importancePicker.isActive = true;
        },

        selectedTaskComplete () {
            this.$emit("action-panel-tasks-complete");
        },
        selectedTaskChangeDueDate () {
            this.$emit("action-panel-tasks-change-due-date", this.selectedDueDate);
        },
        selectedTaskChangeImportance (selectedImportance) {
            this.$emit("action-panel-tasks-change-importance", selectedImportance);
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