const TaskTemplate = `
<div class="task" :class="{ 'task--completed': isChecked }">

    <span :class="{['task__checkbox task--importance-' + importance]: true, ' task--completed': isChecked }">
        <i v-if="isChecked" class="fas fa-check-square"></i>
        <i v-else class="far fa-square"></i>
    </span>

    <span class="task__name">{{ name }}</span>

    <span>{{ dueDate }}</span>
</div>`

export { TaskTemplate }