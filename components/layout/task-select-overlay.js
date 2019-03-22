import { TaskSelectOverlayTemplate } from '../../templates/layout/task-select-overlay-template.js'

const TaskSelectOverlay = {
    data: function () {
        return {
            isActive: false
        }
    },
    template: TaskSelectOverlayTemplate
}

export { TaskSelectOverlay }