import { SearchOverlayTemplate } from '../../templates/layout/search-overlay-template.js'

const SearchOverlay = {
    data: function () {
        return {
            isActive: false
        }
    },
    methods: {
        openSearch () {
            this.isActive = true;
        }
    },
    template: SearchOverlayTemplate
}

export { SearchOverlay }