const SearchOverlayTemplate = `
<div 
    id="search_overlay" 
    :class="{ 'nav_overlay': true, 'nav_overlay--hidden': !isActive }"
>

    <i
        class="action_button fas fa-arrow-left"
        @click="isActive=false"
    ></i>

</div>`

export { SearchOverlayTemplate }