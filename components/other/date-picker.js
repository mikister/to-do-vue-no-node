import { DatePickerTemplate } from '../../templates/other/date-picker-template.js'

const DatePicker = {
    mounted () {
        var currDate = new Date();
        this.currYear = currDate.getFullYear();
        this.selectedYear = this.currYear;
        
        this.currMonth = currDate.getMonth() + 1;
        this.selectedMonth = this.currMonth;
        
        this.selectedMonthName = currDate.toLocaleString('default', { month: 'long' });
        this.currMonthDays = this.daysInMonth(this.selectedYear, this.selectedMonth);
    },
    data: function () {
        return {
            isActive: false,
            currYear: 0,
            currMonth: 0,
            selectedMonthName: "",
            currMonthDays: 0,
            selectedYear: 0,
            selectedMonth: 0,
            weekdayNameOrder: ["M", "T", "W", "T", "F", "S", "S"]
        }
    },
    methods: {
        daysInMonth (year, month) {
            return 32 - new Date(year, month-1, 32).getDate();
        },
        getMonthName (year, month) {
            var selectedDate = new Date(year, month-1, 1);
            return selectedDate.toLocaleString('default', { month: 'long' });
        },
        onSelectedDueDate (selectedDay) {
            if (selectedDay !== "")
            {
                var dateString = (selectedDay + 1) + "." + this.selectedMonth + "." + this.selectedYear;
                this.$emit("date-picked", dateString);
                this.isActive = false;
            }
        },
        getDaysArray () {
            var firstInCurrMonth = new Date(this.selectedYear, this.selectedMonth-1, 1);
            var emptyFields = 0;

            switch(firstInCurrMonth.toLocaleDateString('en-US',{weekday: 'long'}))
            {
                case "Tuesday":
                    emptyFields = 1;
                    break;
                case "Wednesday":
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
        },
        goToPrevMonth () {
            this.selectedMonth -= 1;
            if (this.selectedMonth === 0) {
                this.selectedMonth = 12;
                this.selectedYear -= 1;
            }
            this.currMonthDays = this.daysInMonth(this.selectedYear, this.selectedMonth);
            this.selectedMonthName = this.getMonthName(this.selectedYear, this.selectedMonth);
        },
        goToNextMonth () {
            this.selectedMonth += 1;
            if (this.selectedMonth === 13) {
                this.selectedMonth = 0;
                this.selectedYear += 1;
            }
            this.currMonthDays = this.daysInMonth(this.selectedYear, this.selectedMonth);
            this.selectedMonthName = this.getMonthName(this.selectedYear, this.selectedMonth);
        },
        goToCurrDate () {
            this.selectedYear = this.currYear;
            this.selectedMonth = this.currMonth;
    
            this.currMonthDays = this.daysInMonth(this.selectedYear, this.selectedMonth);
            this.selectedMonthName = this.getMonthName(this.selectedYear, this.selectedMonth);
        },
        getMonthText () {
            if (this.selectedYear === this.currYear)
                return this.selectedMonthName;
            else
                return this.selectedMonthName + ", " + this.selectedYear;
        }
    },
    template: DatePickerTemplate

}

export { DatePicker }