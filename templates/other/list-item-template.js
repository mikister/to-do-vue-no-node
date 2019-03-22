const ListItemTemplate = `
<div class="task-lists__item" @click="changeList">

    <span class="task-lists__item__color-circle" :style="{ backgroundColor: colorCode }"></span>

    <span>{{ name }}</span>

</div>`

export { ListItemTemplate }