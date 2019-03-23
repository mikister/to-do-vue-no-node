const MainViewTemplate = `
<main id="main_view" :class="{ 'main_view--smaller': isMenuOpen }">

    <h1 id="main_view__title">{{ currListName }}</h1>

    <div id="main_view__tasks-container">
        <task 
            v-for="(taskItem, index) in tasks" 
            :key        = "index"
            :name       = "taskItem.name" 
            :isChecked  = "taskItem.isChecked" 
            :importance = "taskItem.importance" 
            :dueDate    = "taskItem.dueDate" 
        ></task>
    </div>

</main>`

export { MainViewTemplate }