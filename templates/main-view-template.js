const MainViewTemplate = `
<main id="main-view">

    <h1 id="main-view__title">List One</h1>

    <div id="main-view__tasks-container">
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