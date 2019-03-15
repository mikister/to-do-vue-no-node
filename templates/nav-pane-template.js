const NavPaneTemplate = `
<nav id="nav-pane" :class="{ 'nav-pane--collapsed': isCollapsed }">

    <div class="flex-strip flex-strip--row">
        <input class="search">
        <i 
            :class="{
                'action-btn fas': true,
                'fa-chevron-left': !isCollapsed,
                'fa-chevron-right': isCollapsed
            }"
            v-on:click="isCollapsed = !isCollapsed"
        ></i>
    </div>

    <div id="task-lists">
        <list-item
            v-for="(listItem, index) in lists"
            :key="index"
            :name="listItem.name"
            :colorCode="listItem.colorCode"
        ></list-item>
    </div>

    <i class="action-btn fas fa-cog" @click="openSettings"></i>

</nav>`

export { NavPaneTemplate }