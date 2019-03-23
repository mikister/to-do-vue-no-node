const SettingsOverlayTemplate = `
<div
    id="settings_overlay" 
    :class="{ 'main_overlay': true, 'main_overlay--hidden': !isActive }"
    v-on:click="isActive = false"
>

    <div class="list_item">
        <i class="action_button fas fa-arrow-left" @click="isActive=false"></i>
    </div>

    <div class="settings_overlay__inner" onclick="event.stopPropagation()">
        <span>To Be Implemented</span>
    </div>

</div>`

export { SettingsOverlayTemplate }