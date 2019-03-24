const TaskTemplate = `
<div :class="{ 'task': true, 'task--selected': isSelected }" @click="toggleTaskSelect">

    <span 
        :class="['task__checkbox task--importance-' + importance]"
        v-on:click="changeCompletedState"
    >
        <i v-if="isChecked" class="fas fa-check-square"></i>
        <i v-else class="far fa-square"></i>
    </span>

    <span :class="{ 'task__name': true, 'task--completed': isChecked }">{{ name }}</span>

    <span>{{ dueDate }}</span>
</div>`

export { TaskTemplate }