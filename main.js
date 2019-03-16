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
    data: function () {
        return {
            currentListIndex: 0,
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
        console.log("beforeMount");
    },
    methods: {
        loadListsData () {},
        saveListsData () {},
        displayTasks (listIndex) {
            this.currentListIndex = listIndex;
            this.$refs.mainView.displayTasks( this.lists[listIndex].tasks );
        },
        displayLists () {
            this.$refs.navPane.displayLists(this.lists);
        },
        onOpenSettings () {
            this.$refs.settingsPane.openSettings();
        }
    },
    template: MainTemplate
})