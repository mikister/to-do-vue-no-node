const NavPanelTemplate = `
<nav id="nav_panel">

    <i 
        class="action_button fas fa-bars"
        v-on:click="openMenu"
    ></i>

    <h1 id="nav_panel__title">{{ currListName }}</h1>

    <i
        class="action_button fas fa-search"
        v-on:click="openSearch"
    ></i>

</nav>`

export { NavPanelTemplate }
