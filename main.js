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
            theme: "dark_mode",
            selectedTasks: {
                amount: 0,
                lists: {}
            },
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
            this.$refs.mainView.displayTasks(this.lists[listIndex]);
            this.$refs.navPanel.updateTitle(this.lists[listIndex].name);
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
        },
        onOpenTaskSelect () {
            this.$refs.taskSelectOverlay.openTaskSelect(this.selectedTasks.amount);
        },
        onCloseTaskSelect () {
            this.unselectAllTasks();
            this.$refs.taskSelectOverlay.closeTaskSelect(false);
        },
        onOpenActionPanel () {
            this.$refs.actionPanel.openActionPanel();
        },
        onCloseActionPanel () {
            this.$refs.actionPanel.closeActionPanel();
        },
        onOpenActionPanelListPicker () {
            this.$refs.actionPanel.targetLists = this.lists;
            this.$refs.actionPanel.$refs.listPicker.isActive = true;
        },

        onTaskToggleSelect (taskIndex) {
            if (!this.selectedTasks.lists[this.currentListIndex]) {
                this.selectedTasks.lists[this.currentListIndex] = {
                    'lists': {},
                    'tasks': []
                }
            }

            if (this.selectedTasks.lists[this.currentListIndex]['tasks'].includes(taskIndex)) {
                this.selectedTasks.amount -= 1;
                var index = this.selectedTasks.lists[this.currentListIndex]['tasks'].indexOf(taskIndex);
                if (index > -1) {
                    this.selectedTasks.lists[this.currentListIndex]['tasks'].splice(index, 1);
                }
            } else {
                this.selectedTasks.amount += 1;
                this.selectedTasks.lists[this.currentListIndex]['tasks'].push(taskIndex);
            }

            if (this.selectedTasks.amount > 0) {
                this.onOpenTaskSelect();
                this.onOpenActionPanel();
            } else {
                this.onCloseTaskSelect();
                this.onCloseActionPanel();
            }
        },
        onTaskToggleCompleted (taskIndex, redrawTasks = true) {
            this.lists[this.currentListIndex].tasks[taskIndex].isChecked = !this.lists[this.currentListIndex].tasks[taskIndex].isChecked;
            if (redrawTasks)
                this.displayTasks(this.currentListIndex);
        },
        onTaskChangeDueDate (taskIndex, newDueDate, redrawTasks = true) {
            this.lists[this.currentListIndex].tasks[taskIndex].dueDate = newDueDate;
            if (redrawTasks)
                this.displayTasks(this.currentListIndex);
        },
        onTaskChangeImportance (taskIndex, newImportance, redrawTasks = true) {
            this.lists[this.currentListIndex].tasks[taskIndex].importance = newImportance;
            if (redrawTasks)
                this.displayTasks(this.currentListIndex);
        },
        onTaskMove (taskIndex, newList, redrawTasks = true) {
            this.lists[newList].tasks.push(this.lists[this.currentListIndex].tasks[taskIndex]);
            this.onTaskDelete(taskIndex, false);
            if (redrawTasks)
                this.displayTasks(this.currentListIndex);
        },
        onTaskDelete (taskIndex, redrawTasks = true) {
            this.lists[this.currentListIndex].tasks.splice(taskIndex, 1);
            if (redrawTasks)
                this.displayTasks(this.currentListIndex);
        },

        onSelectedTaskComplete () {
            this.selectedTasks.lists[this.currentListIndex]['tasks'].forEach(taskIndex => {
                this.onTaskToggleCompleted(taskIndex, false);
            });
            this.unselectAllTasks();
            this.displayTasks(this.currentListIndex);
        },
        onSelectedTaskChangeDueDate (newDueDate) {
            this.selectedTasks.lists[this.currentListIndex]['tasks'].forEach(taskIndex => {
                this.onTaskChangeDueDate(taskIndex, newDueDate, false);
            });
            this.unselectAllTasks();
            this.displayTasks(this.currentListIndex);
        },
        onSelectedTaskChangeImportance (newImportance) {
            this.selectedTasks.lists[this.currentListIndex]['tasks'].forEach(taskIndex => {
                this.onTaskChangeImportance(taskIndex, newImportance, false);
            });
            this.unselectAllTasks();
            this.displayTasks(this.currentListIndex);
        },
        onSelectedTaskMove (newList) {
            this.selectedTasks.lists[this.currentListIndex]['tasks'].sort().reverse();
            this.selectedTasks.lists[this.currentListIndex]['tasks'].forEach(taskIndex => {
                this.onTaskMove(taskIndex, newList, false);
            });
            this.unselectAllTasks();
            this.displayTasks(this.currentListIndex);
        },
        onSelectedTaskDelete () {
            this.selectedTasks.lists[this.currentListIndex]['tasks'].sort().reverse();
            this.selectedTasks.lists[this.currentListIndex]['tasks'].forEach(taskIndex => {
                this.onTaskDelete(taskIndex, false);
            });
            this.unselectAllTasks();
            this.displayTasks(this.currentListIndex);
        },

        unselectAllTasks () {
            this.$refs.mainView.unselectAllTasks();
        },
        onToggleNightMode (NigthModeOn) {
            if (NigthModeOn) {
                this.theme = "dark_mode";
            } else {
                this.theme = "";
            }
        }
    },
    template: MainTemplate
})