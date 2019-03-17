// Note that these are backticks.

const MainTemplate = `
<div id="app">
    <nav-pane 
        ref="navPane" 
        @open-settings="onOpenSettings"
        @change-list="displayTasks"
    ></nav-pane>
    <main-view ref="mainView" @title-change="onTitleChange"></main-view>
    <settings-pane ref="settingsPane"></settings-pane>
</div>
`

export { MainTemplate }