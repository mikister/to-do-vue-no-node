import { DatePickerTemplate } from '../../templates/other/date-picker-template.js'

const DatePicker = {
    mounted () {
        var currDate = new Date();
        this.currYear = currDate.getFullYear();
        this.currMonth = currDate.getMonth() + 1;
        this.currMonthName = currDate.toLocaleString('default', { month: 'long' });
        this.currMonthDays = this.daysInMonth(this.currMonth, this.currYear);
    },
    data: function () {
        return {
            isActive: false,
            currYear: 0,
            currMonth: 0,
            currMonthName: "",
            currMonthDays: 0,
            weekdayNameOrder: ["M", "T", "W", "T", "F", "S", "S"]
        }
    },
    methods: {
        daysInMonth (iMonth, iYear) {
            return 32 - new Date(iYear, iMonth, 32).getDate();
        },
        onSelectedDueDate (selectedDueDate) {
            if (selectedDueDate != "")
            {
                var dateString = selectedDueDate + "." + this.currMonth + "." + this.currYear;
                this.$emit("date-picked", dateString);
            }
        },
        getDaysArray () {
            var firstInCurrMonth = new Date(this.currYear + "-" + this.currMonth + "-1");
            var emptyFields = 0;

            switch(firstInCurrMonth.toLocaleDateString('en-US',{weekday: 'long'}))
            {
                case "Tuesday":
                    emptyFields = 1;
                    break;
                case "Wedneday":
                    emptyFields = 2;
                    break;
                case "Thursday":
                    emptyFields = 3;
                    break;
                case "Friday":
                    emptyFields = 4;
                    break;
                case "Saturday":
                    emptyFields = 5;
                    break;
                case "Sunday":
                    emptyFields = 6;
                    break;
            }

            // First Array constructor generates an array of size "emptyFields" with empty elements
            // Second Array constructor converts the iterator we get from third into an array
            // Thirs Array constructor generates an array iterator of integers going from 0 to "this.currMonthDays" - 1
            return Array(emptyFields).fill("").concat(
                Array.from(Array(this.currMonthDays).keys())
                );
        }
    },
    template: DatePickerTemplate

}

export { DatePicker }