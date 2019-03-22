import { TitleEditableTemplate } from '../../templates/other/title-editable-template.js'

const TitleEditable = {
    data: function () {
        return {
            value: "",
            isEditing: false
        }
    },
    methods: {
        onKeyEscape: function(event) {
            if (event.key === "Escape" || event.key === "Enter") {
                this.isEditing = false;
            }
        },
        changeTitle (newTitle) {
            this.value = newTitle;
        },
        onTitleChange () {
            this.$emit("title-change", this.value);
        }
    },
    template: TitleEditableTemplate,
}

export { TitleEditable }