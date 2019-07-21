const DatePickerTemplate = `
<div
    :class="{ 'picker__container': true, 'picker__container--hidden': !isActive }"
    @click="isActive = false;"
>

    <div class="picker date_picker" onclick="event.stopPropagation()">
        <div
            v-for="index in getDaysArray()"
            class="date_picker__day"
            @click="onSelectedDueDate(index + 1)"
        >{{ index + 1 }}</div>
    </div>

</div>`

export { DatePickerTemplate }