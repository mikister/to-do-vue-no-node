const SettingsPaneTemplate = `
<div 
    id="settings-pane" 
    :class="{ 'settings-pane--active': isActive }"
    v-on:click="isActive = false"
>

    <div class="settings-pane__inner" onclick="event.stopPropagation()">
        <span>To Be Implemented</span>
    </div>

</div>`

export { SettingsPaneTemplate }