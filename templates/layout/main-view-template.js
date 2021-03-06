const MainViewTemplate = `
<main id="main_view" :class="{ 'main_view--smaller': isMenuOpen }">

    <h1 id="main_view__title">{{ currListName }}</h1>

    <div id="main_view__task_container">
        <task 
            v-for="(taskItem, index) in tasks" 
            :key        = "index"
            :index      = "index"
            :name       = "taskItem.name" 
            :isChecked  = "taskItem.isChecked" 
            :importance = "taskItem.importance" 
            :dueDate    = "taskItem.dueDate"
            @task-toggle-select     = "onTaskToggleSelect"
            @task-toggle-completed  = "onTaskToggleCompleted"
            @task-change-due-date   = "onTaskChangeDueDate"
            @task-change-importance = "onTaskChangeImportance"
            @task-move              = "onTaskMove"
            @task-delete            = "onTaskDelete"
        ></task>


        <div id="new_task" v-if="addingNewTask">
            <input
                class="input"
                v-model="newTaskName"
            >
            <i class="action_button fas fa-check" @click="confirmNewTask(true)"></i>
            <i class="action_button fas fa-times" @click="confirmNewTask(false)"></i>
        </div>

        <span class="main_view__task_add_button" @click="$emit('add-task');">
            <i class="fas fa-plus"></i>
            <span>Add Task ...</span>
        </span>

    </div>

</main>`

export { MainViewTemplate }