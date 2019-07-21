const DatePickerTemplate = `
<div
    :class="{ 'picker__container': true, 'picker__container--hidden': !isActive }"
    @click="isActive = false;"
>

    <div class="picker date_picker" onclick="event.stopPropagation()">
        <div class="date_picker__header">
            <span class="date_picker__month">{{ getMonthText() }}</span>
            <i 
                class="action_button fas fa-caret-left" 
                @click="goToPrevMonth"
                title="Previous Month"
            ></i>
            <i 
                class="action_button fas fa-square" 
                @click="goToCurrDate"
                title="Today"
            ></i>
            <i 
                class="action_button fas fa-caret-right" 
                @click="goToNextMonth"
                title="Next Month"
            ></i>
        </div>

        <div class="date_picker__dates">

            <span
                v-for="name in weekdayNameOrder"
                class="date_picker__day date_picker__day--name"
                >{{ name }}</span>

            <span
                v-for="index in getDaysArray()"
                class="date_picker__day"
                @click="onSelectedDueDate(index)"
            >{{ index === "" ? "" : index + 1 }}</span>
        </div>
    </div>

</div>`

export { DatePickerTemplate }