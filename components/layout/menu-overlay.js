import { MenuOverlayTemplate } from '../../templates/layout/menu-overlay-template.js'

const MenuOverlay = {
    data: function () {
        return {
            isActive: false
        }
    },
    template: MenuOverlayTemplate
}

export { MenuOverlay }