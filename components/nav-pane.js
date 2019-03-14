import { NavPaneTemplate } from '../templates/nav-pane-template.js'

import { ListItem } from './list-item.js'

const NavPane = {
    components: {
        'list-item': ListItem
    },
    data: function () {
        return {
            lists: [
                {
                    name: "List 1",
                    colorCode: "#ff0022"
                },
                {
                    name: "List 2",
                    colorCode: "#00ff22"
                },
                {
                    name: "List 3",
                    colorCode: "#000000"
                }
            ]
        }
    },
    template: NavPaneTemplate,
}

export { NavPane }