import { DatePickerTemplate } from '../../templates/other/date-picker-template.js'

const DatePicker = {
    mounted () {
        var currDate = new Date();
        this.currYear = currDate.getFullYear();
        this.currMonth = currDate.getMonth();
        this.currMonthDays = this.daysInMonth(this.currMonth, this.currYear);
    },
    data: function () {
        return {
            isActive: false,
            currYear: 0,
            currMonth: 0,
            currMonthDays: 0
        }
    },
    methods: {
        daysInMonth (iMonth, iYear) {
            return 32 - new Date(iYear, iMonth, 32).getDate();
        },
        onSelectedDueDate (selectedDueDate) {
            this.$emit("date-picked", selectedDueDate);
        },
        getDaysArray () {
            return Array(this.currMonthDays).keys();
        }
    },
    template: DatePickerTemplate

}

export { DatePicker }