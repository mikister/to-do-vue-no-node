import { NavPaneTemplate } from '../templates/nav-pane-template.js'

import { ListItem } from './list-item.js'

const NavPane = {
    components: {
        'list-item': ListItem
    },
    data: function () {
        return {
            isCollapsed: false,
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
    methods: {
        openSettings (event) {
            this.$emit('open-settings');
        }
    },
    template: NavPaneTemplate,
}

export { NavPane }