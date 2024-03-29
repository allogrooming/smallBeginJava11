var today = new Date();
var first = new Date(today.getFullYear(), today.getMonth(),1);
var dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var monthList = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var leapYear=[31,29,31,30,31,30,31,31,30,31,30,31];
var notLeapYear=[31,28,31,30,31,30,31,31,30,31,30,31];
var pageFirst = first;

let inputBox = document.getElementById('input-box');
var inputDate = document.getElementById('input-data');
var inputList = document.getElementById('input-list');
var delText = 'X';
var dataCnt = 1;
var keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();
let todoList = [];
todoList[keyValue] = [];

function getPageYear(date){
    var pageYear;
    if(date.getFullYear() % 4 === 0){
        pageYear = leapYear;
    }else{
        pageYear = notLeapYear;
    }
    return pageYear;
}

function removeCalendar(){
    var calendarBody = document.getElementById('calendar-body');
    removeAllChildElements(calendarBody);
}


function attachMain(mainThisMonth){
    if (!mainThisMonth) mainThisMonth = new Date();
    var tbodyFList = document.createDocumentFragment();
    var tbodyMainMonth = showCalendar(mainThisMonth, 100);
    var tbodyNextFirstWeek = showCalendar(next(mainThisMonth), 200).firstChild;

    tbodyFList.append(tbodyMainMonth);
    tbodyFList.append(tbodyNextFirstWeek);
    let length = tbodyFList.childElementCount;

    for (let i = 0; i < length; i++) {
        tbodyFList.children[i].setAttribute('data-main-month-block', 0);
    }
    document.getElementById("calendar-body").append(tbodyFList);
    return next(mainThisMonth)
}

// TODO: monthCnt 조정 필요
function attachNextForScroll(bottomMonthDate, monthCnt){
    if (!bottomMonthDate) bottomMonthDate = next(new Date());
    var tbodyNextCodeForScroll = showCalendar(bottomMonthDate, monthCnt);

    document.getElementById("calendar-body").append(tbodyNextCodeForScroll);
    return bottomMonthDate;
}

// TODO: monthCnt 조정 필요
function attachPrevForScroll(mainThisMonth, monthCnt){
    if (!mainThisMonth) mainThisMonth = prev(new Date());
    var topMain = prev(mainThisMonth);
    var tbodyPrevCodeForScroll = showCalendar(topMain, monthCnt);
    document.getElementById("calendar-body").before(tbodyPrevCodeForScroll);
    return topMain;
}

function setDateId(pointDate, date){
    if (typeof pointDate == "string") pointDate = new Date(pointDate);
    if (!date) date = pointDate.getDate();

    var dateId = "";
    var dateStr = date.toString();
    dateId += pointDate.getFullYear();
    var monthStr = (pointDate.getMonth() + 1).toString();
    dateId += monthStr.length < 2? "0" + monthStr : monthStr;
    var dateStr = date.toString();
    dateId += dateStr.length < 2? "0" + dateStr : dateStr;
    return dateId;
}

function showCurrentMonthTitle(pointDate){
    var currentMonthStr = '';
    currentMonthStr += pointDate.getFullYear() + '.';
    var monthStr = (pointDate.getMonth() + 1).toString();
    currentMonthStr += monthStr.length < 2? "0" + monthStr : monthStr;

    var calendarTitle = $("#current-year-month");
    calendarTitle.empty();
    calendarTitle.append(currentMonthStr);
}

function showCalendar(pointDate, monthCnt){
    var tbodyFList = document.createDocumentFragment();
    if (!pointDate) pointDate = new Date();
    var pointFirst = new Date(pointDate.getFullYear(), pointDate.getMonth(),1);
    var pointPageYear = getPageYear(pointDate);
    var pointFirstWeekStartDay = pointFirst.getDay();

    var prevFirst = prev(pointDate);
    var prevPageYear = getPageYear(prevFirst);
    var prevLastDate = prevPageYear[prevFirst.getMonth()];
    var prevLastWeekStartDate = prevLastDate - pointFirstWeekStartDay + 1;

    let pointId = parseInt(setDateId(pointDate, 1));
    let prevId = parseInt(setDateId(prevFirst, prevLastWeekStartDate));
    let cnt = 1;
    for(let i = 1; i < 7; i++){ //주에 대한 for문
        var $tr = document.createElement('tr');
        $tr.setAttribute('id', monthCnt + i);
        for(let j = 0; j < 7; j++){
            if(i === 1 && j < pointFirstWeekStartDay){
                var $td = document.createElement('td');
                var $div = document.createElement('div');
                $div.className = 'td-date';
                $div.textContent = prevLastWeekStartDate;;
                $td.appendChild($div);
                $td.setAttribute('id', prevId);
                $td.setAttribute('class', 'prev-calendar');
                if (prevLastWeekStartDate == prevLastDate) $td.classList.add('month-end-date');
                $tr.appendChild($td);
                prevLastWeekStartDate++;
                prevId++;
            } else{
                var $td = document.createElement('td');
                var $div = document.createElement('div');
                $div.className = 'td-date';
                $div.textContent = cnt;
                $td.appendChild($div);
                $td.setAttribute('id', pointId);
                $td.setAttribute('class', 'main-calendar');
                // 달의 첫 날과 마지막 날 구분용 class
                if (cnt == 1) $td.classList.add('month-start-date');
                $tr.appendChild($td);
                cnt++;
                pointId++;
            }
        }
        if (cnt > pointPageYear[pointFirst.getMonth()]) break;
        tbodyFList.appendChild($tr);
    }
    showCurrentMonthTitle(new Date());
    showCurrentDateOnLeft();
    return tbodyFList;
}

function getDateForLeft(pointDate){
    var mainDateForLeft = [];
    var yearStr = pointDate.getFullYear();
    var monthStr = pointDate.toLocaleString("en-US", {month : "short"});
    var dateStr = pointDate.getDate().toString();
    var dayStr = pointDate.toLocaleString("en-US", {weekday : "long"});


    mainDateForLeft.push(yearStr);
    monthStr = monthStr.length < 2? "0" + monthStr : monthStr;
    mainDateForLeft.push(monthStr);
    dateStr = dateStr.length < 2? "0" + dateStr : dateStr;
    mainDateForLeft.push(dateStr);
    mainDateForLeft.push(dayStr);

    return mainDateForLeft;
}

function showCurrentDateOnLeft(pointDate){
    if(!pointDate) pointDate = new Date();
    var mainDateList = getDateForLeft(pointDate);
    var mainYear = $("#main-year");
    var mainMonth = $("#main-month");
    var mainDate = $("#main-date");
    var mainDay = $("#main-day");

    mainYear.empty();
    mainMonth.empty();
    mainDate.empty();
    mainDay.empty();

    mainYear.append(mainDateList[0]);
    mainMonth.append(mainDateList[1]);
    mainDate.append(mainDateList[2]);
    mainDay.append(mainDateList[3]);
}

function inputPlanDate(pointDate){
    if(!pointDate) pointDate = new Date();
    var dateStr = getDate4Ajax(setDateId(pointDate));
    $("#planDate").val(dateStr);
}

function prev(pointDate){
    var pointFirst = new Date(pointDate.getFullYear(), pointDate.getMonth(),1);
    var pointPrev;

    if(pointFirst.getMonth() === 1){ //현재 1월일 경우 이전 년도 보여주기
        pointPrev = new Date(pointFirst.getFullYear()-1, 12, 1);
    }else{
        pointPrev = new Date(pointFirst.getFullYear(), pointFirst.getMonth()-1, 1);
    }
    // 이전으로 클릭 될때 날짜가 같은 달에 대해서 오늘로 보여줌(달력에 크게 띄우는거)
    return pointPrev;
}

function next(pointDate){
    var pointFirst = new Date(pointDate.getFullYear(), pointDate.getMonth(),1);
    var pointNext;

    if(pointFirst.getMonth() === 12){
        pointNext = new Date(pointFirst.getFullYear()+1, 1, 1);
    }else{
        pointNext = new Date(pointFirst.getFullYear(), pointFirst.getMonth()+1, 1);
    }
    return pointNext;
}

function checkList(e){
    e.currentTarget.classList.add('checked');
}

function showMain(){
    const mainDay = document.getElementById('main-day');
    const mainDate = document.getElementById('main-date');
    const mainMonth = document.getElementById('main-month');
    const setUpDate = document.getElementById('setUpDate');
    const mainYear = document.getElementById('main-year');

    let returnDate;

    if(today.getMonth()+1 < 10){
        returnDate = today.getFullYear() + "-0" + (today.getMonth()+1);
    }else{
        returnDate = today.getFullYear() + "-" + (today.getMonth()+1);
    }
    if(today.getDate() < 10){
        returnDate += "-0" + today.getDate();
    }else{
        returnDate += "-" + today.getDate();
    }

    var day = dayList[today.getDay()];
    var date = today.getDate().toString();
    var month = today.toLocaleString("en-US", {month : "short"});
    var year = today.getFullYear().toString();

    var theDate = year + '&nbsp;' + month + '&nbsp;' + date + '&nbsp;' + day.slice(0,3);

    var calendarTitle = $("#current-year-month");
    calendarTitle.empty();
    calendarTitle.append(theDate);

    setUpDate.value = returnDate;
    setUpDate.innerHTML = returnDate;

    return returnDate;
}

function getDateFromId(idStr){
    if(idStr != ""){
        dateStr = "";
        dateStr += idStr.slice(0, 4);
        dateStr += "-";
        dateStr += idStr.slice(4, 6);
        dateStr += "-";
        dateStr += idStr.slice(-2);
        return new Date(dateStr);
    }
}

function checkToDoInTable(trId, result) {
    var selectorStr = "#" + trId + " .state";
    $(selectorStr).text(result);
}

function checkToDoInTable(trId, result) {
    var selectorStr = "#" + trId + " .state";
    $(selectorStr).text(result);
}

// TODO: dataType => JSON(Done)
var readToDoInMonth = function readToDoInMonth(selectedDate){
    if (!selectedDate) selectedDate = getDate4Ajax($(".active").attr("id"));
    var selectedMonth = selectedDate.slice(0, 7);
    var memberCode = getSession();

    $.ajax({
        url : "/readToDoInMonth",
        type : "post",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : "JSON",
        data : {"selectedMonth" : selectedMonth,
                "memberCode" : memberCode
        },
        success : function(result){
            addTodoOnCalendar(result);
        },
        error : function(err){
            console.log(err+"에러발생");
        }
    });
}

function editTodo(result){
    var resultTodo = JSON.parse(result);

    if(resultTodo.length > 0){
        var table4Todo = document.getElementById("toDoListsTable");

        for(var obj of resultTodo){
            var values = Object.values(obj);

            var newRaw = table4Todo.insertRow();
            var color = newRaw.insertCell(0);
            var content = newRaw.insertCell(1);
            var state = newRaw.insertCell(2);
            var deleteBtn = newRaw.insertCell(3);
            var editBtn = newRaw.insertCell(4);

            color.innerText = "●";
            color.id = values[5];
            deleteBtn.id = values[0];
            color.classList.add("color");
            content.classList.add("content");
            deleteBtn.classList.add("delete");
            editBtn.classList.add("edit");
            editBtn.classList.add(i);

            content.innerText = values[2];
            state.innerText = values[4];
            state.className = "state";
            deleteBtn.innerText = "delete";
            editBtn.innerText = "edit";

            var tester = document.getElementById(values[5]);
            var colorTodo = "#" + values[5];
            $(tester).css("color", values[5]);
            i++;
        }
    }
}

function removeAllChildElements(parentElement){
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
}


function clickDate(pointDate){
    // 캘린더 화면에 접속하면 자동으로 해당일의 날짜가 클릭되어 활성화 상태가 된다.
    if (!pointDate) pointDate = new Date();
    var clickedDate = setDateId(pointDate);
    var clickedDateElement = document.getElementById(clickedDate);
    clickedDateElement.classList.add('active');

    // 여기에 첫화면에 대한 to_do 서치하는 함수 넣기 parameter = getDateFromId(clickedDate)
    var param4readToDo = getDate4Ajax(clickedDate);
    readToDo(param4readToDo);

    var tdList = $("#calendar-body td");
    for (td of tdList){
        td.addEventListener('click', changeClickedDate);
        for (tdDiv of td.childNodes){
                tdDiv.addEventListener('click', changeClickedDate);
        }
    }

    function changeClickedDate(e){
        if (clickedDateElement != e.target || clickedDateElement != e.target.parentNode){
            clickedDateElement.classList.remove('active');
            clickedDateElement = e.target;
            clickedDate = e.target.id;

            while (clickedDate == "" || clickedDate.slice(0,2) == "td") {
                clickedDate = clickedDateElement.parentNode.id;
                clickedDateElement = clickedDateElement.parentNode;
                if (clickedDateElement.parentNode.nodeName == "td"){
                    break;
                }
            }

            clickedDateElement.classList.add('active');
            showCurrentDateOnLeft(getDateFromId(clickedDate));
            inputPlanDate(getDateFromId(clickedDate));
            readToDo(getDate4Ajax(clickedDate));
        }
    }
    return getDateFromId(clickedDate);
}

function loadCalendar(pointDate){
    if (!pointDate) {
        var clickedDate = $(".active").attr("id");
    } else {
        var clickedDate = setDateId(pointDate);
    }
    readToDo(getDate4Ajax(clickedDate));
    readToDoInMonth(getDate4Ajax(clickedDate));

}