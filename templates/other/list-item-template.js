const ListItemTemplate = `
<div class="task-lists__item" @click="changeList">

    <span class="list_item__color_circle" :style="{ backgroundColor: colorCode }"></span>

    <span>{{ name }}</span>

</div>`

export { ListItemTemplate }