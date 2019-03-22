const NavPanelTemplate = `
<nav 
    id="nav_panel"
    :class="{ 'nav_panel--collapsed': isCollapsed }"
>

    <div id="top-strip" class="flex-strip flex-strip--row">
        <input id="search" class="input">
        <i 
            :class="{
                'action-btn fas': true,
                'fa-chevron-up': !isCollapsed,
                'fa-bars': isCollapsed
            }"
            v-on:click="isCollapsed = !isCollapsed"
        ></i>
    </div>

    <div id="list_lists">
        <list-item
            v-for="(listItem, index) in lists"
            :key="index"
            :name="listItem.name"
            :colorCode="listItem.colorCode"
            :index="index"
            @change-list="changeList"
        ></list-item>
    </div>

    <i class="action-btn fas fa-cog" @click="openSettings"></i>

</nav>`

export { NavPanelTemplate }
