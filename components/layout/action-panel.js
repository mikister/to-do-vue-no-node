import { ActionPanelTemplate } from '../../templates/layout/action-panel-template.js'

const ActionPanel = {
    data: function () {
        return {
            isActive: false
        }
    },
    template: ActionPanelTemplate
}

export { ActionPanel }