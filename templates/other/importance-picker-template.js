const ImportancePickerTemplate = `
<div
    :class="{ 'picker__container': true, 'picker__container--hidden': !isActive }"
    @click="isActive = false;"
>

    <div class="picker" onclick="event.stopPropagation()">

        <i class="action_button action_button--importance-4 fas fa-bell" @click="onSelectedImportance(4)"></i>

        <i class="action_button action_button--importance-3 fas fa-bell" @click="onSelectedImportance(3)"></i>
            
        <i class="action_button action_button--importance-2 fas fa-bell" @click="onSelectedImportance(2)"></i>

        <i class="action_button action_button--importance-1 fas fa-bell" @click="onSelectedImportance(1)"></i>

    </div>

</div>`

export { ImportancePickerTemplate }