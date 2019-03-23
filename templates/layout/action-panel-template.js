const ActionPanelTemplate = `
<div
    id="action_panel"
    :class="{ 'nav_overlay--hidden': !isActive }"    
>

    <i class="action_button fas fa-check" @click="completeSelectedTask"></i>

    <i class="action_button fas fa-calendar" @click="scheduleSelectedTask"></i>

    <i class="action_button fas fa-list" @click="moveSelectedTask"></i>

    <i class="action_button fas fa-bell" @click="changeImportanceOfSelectedTask"></i>

</div>`

export { ActionPanelTemplate }