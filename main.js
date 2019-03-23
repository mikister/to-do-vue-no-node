import Vue from './vue.js'

import { MainTemplate } from './templates/main-template.js'


import { MainView } from './components/layout/main-view.js'
import { SettingsOverlay } from './components/layout/settings-overlay.js'
import { MenuOverlay } from './components/layout/menu-overlay.js'

import { NavPanel } from './components/layout/nav-panel.js'
import { SearchOverlay } from './components/layout/search-overlay.js'
import { TaskSelectOverlay } from './components/layout/task-select-overlay.js'

import { ActionPanel } from './components/layout/action-panel.js'


new Vue({
    el: '#app',
    components: {
        'main-view': MainView,
        'settings-overlay': SettingsOverlay,
        'menu-overlay': MenuOverlay,
        'nav-panel': NavPanel,
        'search-overlay': SearchOverlay,
        'task-select-overlay': TaskSelectOverlay,
        'action-panel': ActionPanel,
    },
    data: function () {
        return {
            currentListIndex: 0,
            aspectRatio: 1,
            width: 0,
            height: 0,
            lists: [
                {
                    name: "List 1",
                    colorCode: "#CE391A",
                    tasks: [
                        {
                            name: "Task 1",
                            isChecked: false,
                            importance: 1,
                            dueDate: "16.03.2019"
                        },
                        {
                            name: "Task 2",
                            isChecked: false,
                            importance: 2,
                            dueDate: "12.03.2019"
                        },
                        {
                            name: "Task 3",
                            isChecked: false,
                            importance: 3,
                            dueDate: "12.03.2019"
                        },
                        {
                            name: "Task 4",
                            isChecked: false,
                            importance: 4,
                            dueDate: "12.03.2019"
                        },
                        {
                            name: "Task 5",
                            isChecked: true,
                            importance: 1,
                            dueDate: "12.03.2019"
                        }
                    ]
                },
                {
                    name: "List 2",
                    colorCode: "#78CC81",
                    tasks: [
                        {
                            name: "Task 1",
                            isChecked: false,
                            importance: 1,
                            dueDate: "16.03.2019"
                        },
                        {
                            name: "Task 2",
                            isChecked: false,
                            importance: 2,
                            dueDate: "12.03.2019"
                        },
                    ]
                },
                {
                    name: "List 3",
                    colorCode: "#421C4B",
                    tasks: [
                        {
                            name: "Other 1",
                            isChecked: false,
                            importance: 1,
                            dueDate: "16.03.2019"
                        },
                        {
                            name: "Task 2",
                            isChecked: false,
                            importance: 2,
                            dueDate: "12.03.2019"
                        },
                    ]
                }
            ]
        }
    },
    mounted () {
        this.loadListsData();
        this.displayLists();
        this.displayTasks(this.currentListIndex);
        this.getAppDimensions();
        this.$refs.navPanel.updateTitle(this.lists[this.currentListIndex].name);
        console.log("beforeMount");
    },
    methods: {
        loadListsData () {},
        saveListsData () {},
        displayTasks (listIndex) {
            this.currentListIndex = listIndex;
            this.$refs.mainView.displayTasks( this.lists[listIndex] );
        },
        displayLists () {
            this.$refs.menuOverlay.displayLists(this.lists);
        },
        getAppDimensions () {
            this.width = this.$el.offsetWidth;
            this.height = this.$el.offsetHeight;
            this.aspectRatio = this.width / this.height;
            console.log(this.width,
                this.height,
                this.aspectRatio);
        },
        onOpenSettings () {
            this.$refs.settingsOverlay.openSettings();
        },
        onOpenMenu () {
            this.$refs.mainView.setMenuState(true);
            this.$refs.menuOverlay.openMenu();
        },
        onCloseMenu () {
            this.$refs.mainView.setMenuState(false);
        },
        onOpenSearch () {
            this.$refs.searchOverlay.openSearch();
        }
    },
    template: MainTemplate
})