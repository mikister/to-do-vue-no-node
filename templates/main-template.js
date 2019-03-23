// Note that these are backticks.

const MainTemplate = `
<div id="app">

    <nav-panel 
        ref="navPanel" 
        @open-menu="onOpenMenu"
        @open-search="onOpenSearch"
    ></nav-panel>

    <search-overlay ref="searchOverlay"></search-overlay>

    <task-select-overlay ref="taskSelectOverlay"></task-select-overlay>


    <action-panel ref="actionPanel" ></action-panel>


    <main-view ref="mainView"></main-view>

    <settings-overlay ref="settingsOverlay"></settings-overlay>

    <menu-overlay
        ref="menuOverlay"
        @open-settings="onOpenSettings"
        @close-menu="onCloseMenu"
        @change-list="displayTasks"
    ></menu-overlay>

</div>
`

export { MainTemplate }