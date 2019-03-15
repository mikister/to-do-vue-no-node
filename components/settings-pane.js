import { SettingsPaneTemplate } from '../templates/settings-pane-template.js'

const SettingsPane = {
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
    template: SettingsPaneTemplate,
}

export { SettingsPane }