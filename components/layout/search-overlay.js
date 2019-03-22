import { SearchOverlayTemplate } from '../../templates/layout/search-overlay-template.js'

const SearchOverlay = {
    data: function () {
        return {
            isActive: false
        }
    },
    template: SearchOverlayTemplate
}

export { SearchOverlay }