import { ListItemTemplate } from '../templates/list-item-template.js'

const ListItem = {
    props: {
        name:  String,
        colorCode: String,
        index: Number
    },
    methods: {
        changeList (event) {
            this.$emit('change-list', this.index);
        }
    },
    template: ListItemTemplate,
}

export { ListItem }