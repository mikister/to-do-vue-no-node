const NavPaneTemplate = `
<nav id="nav-pane">

    <div class="flex-strip flex-strip--row">
        <input class="search">
        <i class="fas fa-chevron-left"></i>
    </div>

    <div id="task-lists">
        <list-item
            v-for="(listItem, index) in lists"
            :key="index"
            :name="listItem.name"
            :colorCode="listItem.colorCode"
        ></list-item>
    </div>

    <i class="fas fa-cog"></i>

</nav>`

export { NavPaneTemplate }