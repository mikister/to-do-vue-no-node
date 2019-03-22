const MainViewTemplate = `
<main id="main_view">

    <!-- <h1 id="main_view__title"></h1> -->
    <editable-title 
        ref="title" 
        id="main_view__title"
        @title-change="onTitleChange"
    ></editable-title>

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