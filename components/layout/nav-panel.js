import { NavPanelTemplate } from '../../templates/layout/nav-panel-template.js'

import { ListItem } from '../other/list-item.js'

const NavPanel = {
    components: {
        'list-item': ListItem
    },
    data: function () {
        return {
            currListName: "",
            isCollapsed: true,
            lists: []
        }
    },
    methods: {
        openMenu (event) {
            this.$emit('open-menu');
        },
        openSearch (event) {
            this.$emit('open-search');
        },
        updateTitle (newTitle) {
            this.currListName = newTitle;
        }
    },
    template: NavPanelTemplate,
}

export { NavPanel }