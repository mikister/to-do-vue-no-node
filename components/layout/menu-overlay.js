import { MenuOverlayTemplate } from '../../templates/layout/menu-overlay-template.js'

import { ListItem } from '../other/list-item.js'

const MenuOverlay = {
    components: {
        'list-item': ListItem
    },
    data: function () {
        return {
            nightMode: true,
            isActive: false,
            lists: []
        }
    },
    methods: {
        displayLists (newLists) {
            this.lists = newLists;
        },
        changeList (value) {
            this.$emit('change-list', value);
            this.closeMenu();
        },
        openMenu () {
            this.isActive = true;
        },
        closeMenu (event) {
            this.isActive = false;
            this.$emit('close-menu');
        },
        openSettings (event) {
            // this.isActive = false;
            this.$emit('open-settings');
        },
        toggleNightMode (event) {
            this.nightMode = !this.nightMode;
            this.$emit("toggle-night-mode", this.nightMode);
        }
    },
    template: MenuOverlayTemplate
}

export { MenuOverlay }