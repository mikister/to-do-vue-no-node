const ActionPanelTemplate = `
<div
    id="action_panel"
    :class="{ 'nav_overlay--hidden': !isActive }"
>


    <importance-picker
        ref="importancePicker"
        @importance-picked="selectedTaskChangeImportance"    
    ></importance-picker>

    <div id="action_panel__button_container">

        <i class="action_button fas fa-check" @click="selectedTaskComplete"></i>

        <i class="action_button fas fa-calendar" @click="selectedTaskChangeDueDate"></i>

        <i class="action_button fas fa-list" @click="selectedTaskMove"></i>

        <i class="action_button fas fa-bell" @click="openImportancePicker"></i>

        <i class="action_button fas fa-trash" @click="selectedTaskDelete"></i>

    </div>

</div>`

export { ActionPanelTemplate }