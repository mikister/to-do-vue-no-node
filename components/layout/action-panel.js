import { ActionPanelTemplate } from '../../templates/layout/action-panel-template.js'

import { ImportancePicker } from '../other/importance-picker.js'
import { DatePicker } from '../other/date-picker.js'
import { ListPicker } from '../other/list-picker.js'

const ActionPanel = {
    components: {
        'importance-picker': ImportancePicker,
        'date-picker': DatePicker,
        'list-picker': ListPicker,
    },
    data: function () {
        return {
            isActive: false,
            selectedDueDate: "",
            targetLists: [],
            mockLists: ["a", "b", "c"],
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
        openDatePicker () {
            this.$refs.datePicker.isActive = true;
        },
        openListPicker () {
            this.$emit("action-panel-open-list-picker");
        },

        selectedTaskComplete () {
            this.$emit("action-panel-tasks-complete");
        },
        selectedTaskChangeDueDate (selectedDueDate) {
            this.$emit("action-panel-tasks-change-due-date", selectedDueDate);
        },
        selectedTaskChangeImportance (selectedImportance) {
            this.$emit("action-panel-tasks-change-importance", selectedImportance);
        },
        selectedTaskMove (listIndex) {
            this.$emit("action-panel-tasks-move", listIndex);
        },
        selectedTaskDelete () {
            this.$emit("action-panel-tasks-delete");
        }
    },
    template: ActionPanelTemplate
}

export { ActionPanel }