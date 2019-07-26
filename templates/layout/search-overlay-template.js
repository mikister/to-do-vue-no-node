const SearchOverlayTemplate = `
<div 
    id="search_overlay" 
    :class="{ 'nav_overlay': true, 'nav_overlay--hidden': !isActive }"
>

    <i
        class="action_button fas fa-arrow-left"
        @click="closeSearch"
    ></i>

    <input
        id="search"
        class="input"
        v-model="pattern"
        @input="$emit('search-pattern-changed', pattern)"
    >

</div>`

export { SearchOverlayTemplate }