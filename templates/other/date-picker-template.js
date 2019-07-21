const DatePickerTemplate = `
<div
    :class="{ 'picker__container': true, 'picker__container--hidden': !isActive }"
    @click="isActive = false;"
>

    <div class="picker date_picker" onclick="event.stopPropagation()">
        <span class="date_picker_month">{{ currMonthName }}</span>

        <div class="date_picker__dates">

            <span
                v-for="name in weekdayNameOrder"
                class="date_picker__day date_picker__day--name"
                >{{ name }}</span>

            <span
                v-for="index in getDaysArray()"
                class="date_picker__day"
                @click="onSelectedDueDate(index + 1)"
            >{{ index === "" ? "" : index + 1 }}</span>
        </div>
    </div>

</div>`

export { DatePickerTemplate }