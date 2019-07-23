const ActionPanelTemplate = `
<div
    id="action_panel"
    :class="{ 'nav_overlay--hidden': !isActive }"
>

    <div id="action_panel__button_container">

        <i class="action_button fas fa-check" @click="selectedTaskComplete"></i>

        <i class="action_button fas fa-calendar" @click="openDatePicker"></i>

        <i class="action_button fas fa-list" @click="openListPicker"></i>

        <i class="action_button fas fa-bell" @click="openImportancePicker"></i>

        <i class="action_button fas fa-trash" @click="selectedTaskDelete"></i>

    </div>


    <importance-picker
        ref="importancePicker"
        @importance-picked="selectedTaskChangeImportance"    
    ></importance-picker>

    <date-picker
        ref="datePicker"
        @date-picked="selectedTaskChangeDueDate"    
    ></date-picker>

    <list-picker
        ref="listPicker"
        @list-picked="selectedTaskMove"
        :targetLists="targetLists"
    ></list-picker>

</div>`

export { ActionPanelTemplate }