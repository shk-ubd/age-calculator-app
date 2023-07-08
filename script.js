function showResult() {
    let dd, mm, yy, condArray = [false, false, false]

    dd = document.getElementById("date")
    mm = document.getElementById("month")
    yy = document.getElementById("year")

    spanElements = Array.from(document.getElementsByTagName("span"))

    if (dd.value === '') {
        emptyInput(dd)
    }
    else if (dd.value > 31 || dd.value <= 0) {
        invalidInput(dd)
    }
    else {
        correct(dd)
        condArray[0] = true

    }

    if (mm.value === '') {
        emptyInput(mm)
    }
    else if (mm.value > 12 || mm.value <= 0) {
        invalidInput(mm)
    }
    else {
        correct(mm)
        condArray[1] = true

    }

    if (yy.value === '') {
        emptyInput(yy)
    }
    else if (yy.value > 2023 || yy.value <=0) {
        invalidInput(yy)
    }
    else {
        correct(yy)
        condArray[2] = true

    }

    if (condArray[0] && condArray[1] && condArray[2]) {
        displayResult(yy.value, mm.value, dd.value)

    }


}

function emptyInput(el) {
    el.nextElementSibling.innerHTML = 'This field is required'
    el.style.border = "1px solid red"
    el.previousElementSibling.style.color = "red"
}

function invalidInput(el) {
    el.nextElementSibling.innerHTML = `Must be a valid ${el.id}</p>`
    el.style.border = "1px solid red"
    el.previousElementSibling.style.color = "red"
}

function correct(el) {
    el.nextElementSibling.innerHTML = ''
    el.style.border = '2px solid hsl(0, 0%, 94%)'
    el.previousElementSibling.style.color = 'hsl(0, 1%, 44%);'

}

function displayResult(birthYear, birthMonth, birthDate) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();


    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDate;

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        let previousMonthDate = new Date(currentYear, currentMonth - 1, 0);
        days += previousMonthDate.getDate();
        months--;
    }
    spanElements[0].innerHTML = years
    spanElements[1].innerHTML = months
    spanElements[2].innerHTML = days
}


