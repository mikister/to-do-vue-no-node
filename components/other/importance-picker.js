import { ImportancePickerTemplate } from '../../templates/other/importance-picker-template.js'

const ImportancePicker = {
    data: function () {
        return {
            isActive: false,
            selectedImportance: 0
        }
    },
    methods: {
        onSelectedImportance (selectedImportance) {
            this.isActive = false;
            this.$emit("importance-picked", selectedImportance);
        }
    },
    template: ImportancePickerTemplate
}

export { ImportancePicker }