function moveSlider(calendarType) {
    var clockWidth = 90; // vw
    var slider = document.getElementById(calendarType + "-clock-slider");
    var time = new Date();

    var monthLength = new Date(time.getFullYear(), time.getMonth() + 1, 0).getDate()
    var minuteWidth = time.getSeconds() / 60;
    var hourWidth = (time.getMinutes() / 60) + (minuteWidth / 60);
    var dayWidth = (time.getHours() / 24) + (hourWidth / 24);
    var weekWidth = ((time.getDay() - 1) / 7) + (dayWidth / 7);
    var monthWidth = ((time.getDate() - 1) / monthLength) + (dayWidth / monthLength);
    var yearWidth = (time.getMonth() / 12) + (monthWidth / 12);

    if(calendarType == "minute") {
        var currWidth = minuteWidth * clockWidth;
    }
    else if(calendarType == "hour") {
        var currWidth = hourWidth * clockWidth;
    }
    else if(calendarType == "day") {
        var currWidth = dayWidth * clockWidth;
    }
    else if(calendarType == "week") {
        var currWidth = weekWidth * clockWidth;
    }
    else if(calendarType == "month") {
        var currWidth = monthWidth * clockWidth;
        var months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"]
        document.getElementById("this-month").innerHTML = months[time.getMonth()];
        document.getElementById("end-of-month-date").innerHTML = monthLength;
    }
    else if(calendarType == "year") {
        var currWidth = yearWidth * clockWidth;
        document.getElementById("this-year").innerHTML = time.getFullYear();
    }
    slider.style.width = currWidth + 'vw';
}

function runSliders(clocks) {
    var clocks = ["minute", "hour", "day", "week", "month", "year"];
    for(let i = 0; i < clocks.length; i++) {
        moveSlider(clocks[i])
    }
}

function run() {
    runSliders();
    setInterval(runSliders, 1000);
}

window.onload = run;