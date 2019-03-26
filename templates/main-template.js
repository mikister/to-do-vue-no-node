// Note that these are backticks.

const MainTemplate = `
<div id="app" :class="theme">

    <nav-panel 
        ref="navPanel" 
        @open-menu="onOpenMenu"
        @open-search="onOpenSearch"
    ></nav-panel>

    <search-overlay ref="searchOverlay"></search-overlay>

    <task-select-overlay
        ref="taskSelectOverlay"
        @close-task-select="onCloseTaskSelect"
    ></task-select-overlay>


    <action-panel ref="actionPanel" ></action-panel>


    <main-view
        ref="mainView"
        @toggle-task-select="onToggleTaskSelect"
    ></main-view>

    <settings-overlay ref="settingsOverlay"></settings-overlay>

    <menu-overlay
        ref="menuOverlay"
        @open-settings="onOpenSettings"
        @close-menu="onCloseMenu"
        @change-list="displayTasks"
        @toggle-night-mode="onToggleNightMode"
    ></menu-overlay>

</div>
`

export { MainTemplate }