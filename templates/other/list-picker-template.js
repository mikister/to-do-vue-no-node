const ListPickerTemplate = `
<div
    :class="{ 'picker__container': true, 'picker__container--hidden': !isActive }"
    @click="isActive = false;"
>

    <div class="picker list_picker" onclick="event.stopPropagation()">
        <div class="list_picker__item_container">
            <list-item
                class="list_item"
                v-for="(listItem, index) in targetLists"
                :key="index"
                :name="listItem.name"
                :colorCode="listItem.colorCode"
                :index="index"
                @change-list="onSelectedList"
            ></list-item>
        </div>
    </div>

</div>`

export { ListPickerTemplate }