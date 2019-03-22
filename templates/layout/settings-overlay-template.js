const SettingsOverlayTemplate = `
<div
    id="settings_overlay" 
    :class="{ 'main_overlay': true, 'main_overlay--hidden': !isActive }"
    v-on:click="isActive = false"
>

    <div class="settings_overlay__inner" onclick="event.stopPropagation()">
        <span>To Be Implemented</span>
    </div>

</div>`

export { SettingsOverlayTemplate }