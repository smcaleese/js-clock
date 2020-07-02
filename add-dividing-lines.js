var dividingLinesDiv = document.getElementsByClassName("vertical-dividing-lines");

function addLines(clock, n) {
    var dividingLine = document.createElement("span");
    dividingLine.className = "line";
    numLines = 3;

    if(clock == "day") {
        numLines = 23;
    }
    else if(clock == "week") {
        numLines = 6;
    }
    else if(clock == "month") {
        let time = new Date();
        let monthLength = new Date(time.getFullYear(), time.getMonth(), 0).getDate()
        numLines = monthLength;
    }
    else if(clock == "year") {
        numLines = 11;
    }
    for(let i = 0; i < numLines; i++) {
        var dividingLine = document.createElement("span");
        dividingLine.className = "line";
        dividingLinesDiv[n].appendChild(dividingLine);
    }
}

function addDividingLines(clocks) {
        var clocks = ["minute", "hour", "day", "week", "month", "year"];
    var numdividingLinesDivs = dividingLinesDiv.length;
    console.log("adding lines");
    for(let i = 0; i < numdividingLinesDivs; i++) {
        addLines(clocks[i], i)
    }
}

addDividingLines();
