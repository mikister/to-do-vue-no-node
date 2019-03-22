import { SettingsOverlayTemplate } from '../../templates/layout/settings-overlay-template.js'

const SettingsOverlay = {
    data: function () {
        return {
            isActive: false
        }
    },
    methods: {
        openSettings () {
            this.isActive = true;
        }
    },
    template: SettingsOverlayTemplate,
}

export { SettingsOverlay }