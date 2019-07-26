import { SearchOverlayTemplate } from '../../templates/layout/search-overlay-template.js'

const SearchOverlay = {
    data: function () {
        return {
            isActive: false,
            pattern: ""
        }
    },
    methods: {
        openSearch () {
            this.isActive = true;
        },
        closeSearch () {
            this.$emit('close-search');
            this.isActive=false;
        }
    },
    template: SearchOverlayTemplate
}

export { SearchOverlay }