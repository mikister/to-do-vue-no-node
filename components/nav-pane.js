import { NavPaneTemplate } from '../templates/nav-pane-template.js'

import { ListItem } from './list-item.js'

const NavPane = {
    components: {
        'list-item': ListItem
    },
    data: function () {
        return {
            isCollapsed: false,
            lists: []
        }
    },
    methods: {
        displayLists (newLists) {
            this.lists = newLists;
        },
        changeList (value) {
            this.$emit('change-list', value);
        },
        openSettings (event) {
            this.$emit('open-settings');
        }
    },
    template: NavPaneTemplate,
}

export { NavPane }