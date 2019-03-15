// Note that these are backticks.

const MainTemplate = `
<div id="app">
    <nav-pane @open-settings="onOpenSettings"></nav-pane>
    <main-view></main-view>
    <settings-pane ref="settingsPane"></settings-pane>
</div>
`

export { MainTemplate }