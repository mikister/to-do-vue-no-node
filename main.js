import Vue from './vue.js'

import {
    NavPane
} from './components/nav-pane.js'

import {
    MainView
} from './components/main-view.js'

import {
    SettingsPane
} from './components/settings-pane.js'

import {
    MainTemplate
} from './templates/main-template.js'

new Vue({
    el: '#app',
    components: {
        'nav-pane': NavPane,
        'main-view': MainView,
        'settings-pane': SettingsPane
    },
    methods: {
        onOpenSettings () {
            this.$refs.settingsPane.openSettings();
        }
    },
    template: MainTemplate
})