const SettingsOverlayTemplate = `
<div 
    id="overlay_setting" 
    :class="{ 'main_overlay overlay_settings--hidden': true, 'overlay_setting--active': isActive }"
    v-on:click="isActive = false"
>

    <div class="overlay_setting__inner" onclick="event.stopPropagation()">
        <span>To Be Implemented</span>
    </div>

</div>`

export { SettingsOverlayTemplate }