import { ListItemTemplate } from '../templates/list-item-template.js'

const ListItem = {
    props: {
        name:  String,
        colorCode: String
    },
    template: ListItemTemplate,
}

export { ListItem }