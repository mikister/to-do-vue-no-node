const TaskSelectOverlayTemplate = `
<div 
    id="task_select_overlay" 
    :class="{ 'nav_overlay': true, 'nav_overlay--hidden': !isActive }"
>

<i
    class="action_button fas fa-arrow-left"
    @click="closeTaskSelect"
></i>

<h2>{{ selectedTasksNum }}</h2>

</div>`

export { TaskSelectOverlayTemplate }