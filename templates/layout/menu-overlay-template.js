const MenuOverlayTemplate = `
<div 
    id="menu_overlay" 
    :class="{ 'main_overlay': true, 'main_overlay--hidden': !isActive }"
>

    <div class="list_item">
        <i class="action_button fas fa-arrow-left" @click="closeMenu"></i>
    </div>

    <div class="list_item">
        <i class="action_button fas fa-inbox"></i>
        <span class="list_item__name">Inbox</span>
    </div>

    <div class="list_item">
        <i class="action_button fas fa-calendar-day"></i>
        <span class="list_item__name">Today</span>
    </div>

    <div class="list_item">
        <i class="action_button fas fa-calendar-week"></i>
        <span class="list_item__name">Next 7 Days</span>
    </div>

    <hr class="list_item__separator">

    <div id="list_lists">
        <list-item
            class="list_item"
            v-for="(listItem, index) in lists"
            :key="index"
            :name="listItem.name"
            :colorCode="listItem.colorCode"
            :index="index"
            @change-list="changeList"
        ></list-item>
    </div>

    <hr class="list_item__separator">

    <div class="list_item" @click="toggleNightMode">
        <i v-if="nightMode" class="action_button fas fa-sun"></i>
        <i v-else class="action_button fas fa-moon"></i>
        <span v-if="nightMode" class="list_item__name">Day Mode</span>
        <span v-else class="list_item__name">Night Mode</span>
    </div>

    <div class="list_item" @click="openSettings">
        <i class="action_button fas fa-cog"></i>
        <span class="list_item__name">Settings</span>
    </div>


</div>`

export { MenuOverlayTemplate }