// Note that these are backticks.

const MainTemplate = `
<div id="app">

    <nav-panel 
        ref="navPanel" 
        @open-settings="onOpenSettings"
        @change-list="displayTasks"
    ></nav-panel>

    <search-overlay></search-overlay>

    <task-select-overlay></task-select-overlay>


    <action-panel></action-panel>


    <main-view ref="mainView" @title-change="onTitleChange"></main-view>

    <settings-overlay ref="settingsOverlay"></settings-overlay>

    <menu-overlay></menu-overlay>

</div>
`

export { MainTemplate }