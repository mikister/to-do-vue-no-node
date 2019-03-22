import { NavPanelTemplate } from '../../templates/layout/nav-panel-template.js'

import { ListItem } from '../other/list-item.js'

const NavPanel = {
    components: {
        'list-item': ListItem
    },
    data: function () {
        return {
            isCollapsed: true,
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
    template: NavPanelTemplate,
}

export { NavPanel }