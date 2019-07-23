import { ListPickerTemplate } from '../../templates/other/list-picker-template.js';

import { ListItem } from './list-item.js';

const ListPicker = {
    components: {
        "list-item": ListItem,
    },
    props: {
        targetLists: Array
    },
    data: function () {
        return {
            isActive: false,            
        }
    },
    methods: {
        onSelectedList (listIndex) {
            this.$emit("list-picked", listIndex);
            this.isActive = false;
        }
    },
    template: ListPickerTemplate
}

export { ListPicker }