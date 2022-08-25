var today = new Date();
var first = new Date(today.getFullYear(), today.getMonth(),1);
var dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var monthList = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var leapYear=[31,29,31,30,31,30,31,31,30,31,30,31];
var notLeapYear=[31,28,31,30,31,30,31,31,30,31,30,31];
var pageFirst = first;
//var pageYear;

let inputBox = document.getElementById('input-box');
var inputDate = document.getElementById('input-data');
var inputList = document.getElementById('input-list');
var delText = 'X';
//inputDate.addEventListener('click',addTodoList);
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

function attachMain(){
    var mainThisMonth = new Date();
    var tbodyFList = document.createDocumentFragment();
    var tbodyMainCode = showCalendar(mainThisMonth, 100);
//    var tbodyNextFirstWeekCode = showCalendar(next(mainThisMonth), 200).firstElementChild;
    var tbodyNextFirstWeekCode = showCalendar(next(mainThisMonth), 200);

    tbodyFList.append(tbodyMainCode);
    tbodyFList.append(tbodyNextFirstWeekCode);
    let length = tbodyFList.childElementCount;

    for (var i = 0; i < length; i++) {
        tbodyFList.children[i].setAttribute('data-main-month-block', 0);
    }

//    document.getElementById("calendar-body").append(tbodyMainCode)
//    document.getElementById("calendar-body").append(tbodyNextFirstWeekCode)
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

function getDateSepPoint(pointDate){
    var currentMonthStr = '';
    currentMonthStr += pointDate.getFullYear() + '.';
    var monthStr = (pointDate.getMonth() + 1).toString();
    var dateStr = (pointDate.getDate()).toString();
    currentMonthStr += monthStr.length < 2? "0" + monthStr : monthStr;
    currentMonthStr += '.'
    currentMonthStr += dateStr.length < 2? "0" + dateStr : dateStr;

    return currentMonthStr;
}

function setDateId(pointDate, date){
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
    for(var i = 1; i < 7; i++){ //주에 대한 for문
        var $tr = document.createElement('tr');
        $tr.setAttribute('id', monthCnt + i);
        for(var j = 0; j < 7; j++){
            if(i === 1 && j < pointFirstWeekStartDay){
                var $td = document.createElement('td');
                var $div = document.createElement('div');
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
//    var setUpDate = $("#setUpDate");

//    setUpDate.empty();
    mainYear.empty();
    mainMonth.empty();
    mainDate.empty();
    mainDay.empty();

//    setUpDate.append(mainDateList);
    mainYear.append(mainDateList[0]);
    mainMonth.append(mainDateList[1]);
    mainDate.append(mainDateList[2]);
    mainDay.append(mainDateList[3]);

}


function removeCalendar(){
    let catchTr = 100;
    for(var i = 100; i< 106; i++){
        var $tr = document.getElementById(catchTr);
        $tr.remove();
        catchTr++;
    }
}

function prev(pointDate){
    var pointFirst = new Date(pointDate.getFullYear(), pointDate.getMonth(),1);
    var pointPrev;
//    let preBox = document.getElementById('toDoContent').value;
//    preBox.value = '';
//    const $divs = document.querySelectorAll('#input-list > div');
/*    console.log("$divs");
    console.log($divs);*/
//    $divs.forEach(function(e){
//        e.remove(); //
//    });
//    const $btns = document.querySelectorAll('#input-list > button');
//    $btns.forEach(function(e1){
//        e1.remove();
//    });
    if(pointFirst.getMonth() === 1){ //현재 1월일 경우 이전 년도 보여주기
        pointPrev = new Date(pointFirst.getFullYear()-1, 12, 1);
//        first = pageFirst;
//        if(first.getFullYear() % 4 === 0){
//            pageYear = leapYear;
//        }else{
//            pageYear = notLeapYear;
//        }
    }else{
        pointPrev = new Date(pointFirst.getFullYear(), pointFirst.getMonth()-1, 1);
//        first = pageFirst;
    }
    // 이전으로 클릭 될때 날짜가 같은 달에 대해서 오늘로 보여줌(달력에 크게 띄우는거)
//    today = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
//    removeCalendar();
//    tbodyPrevCode = showCalendar(pointPrev);
    return pointPrev;
//    showMain();
//    clickedDate1 = document.getElementById(today.getDate());
//    clickedDate1.classList.add('active');
//    clickStart();
//    reshowingList();

}



function next(pointDate){
    var pointFirst = new Date(pointDate.getFullYear(), pointDate.getMonth(),1);
    var pointNext;
//    var tbodyNextCode;

//    let nextBox = document.getElementById('toDoContent').value;
//    nextBox.value = '';
//    const $divs = document.querySelectorAll('#input-list > div');
//    $divs.forEach(function(e){
//        e.remove();
//    });
//    const $btns = document.querySelectorAll('#input-list > button');
//    $btns.forEach(function(e1){
//        e1.remove();
//    });
    if(pointFirst.getMonth() === 12){
        pointNext = new Date(pointFirst.getFullYear()+1, 1, 1);
//        first = pageFirst;
//        if(first.getFullYear() % 4 === 0){
//            pageYear = leapYear;
//        }else{
//            pageYear = notLeapYear;
//        }
    }else{
        pointNext = new Date(pointFirst.getFullYear(), pointFirst.getMonth()+1, 1);
//        first = pageFirst;
    }
//    today = new Date(today.getFullYear(), today.getMonth()+1, today.getDate());
//    removeCalendar();
//    flag = false;
//    showCalendar();
//    showMain();
//    clickedDate1 = document.getElementById(today.getDate());
//    clickedDate1.classList.add('active');
//    console.log(clickedDate1);
//    clickStart();
//    reshowingList();
//    return flag
//    console.log('pointNext :', pointNext);
    return pointNext;
}

function reshowingList(selectedDate){
    $.ajax({
        url : '/readCalendar',
        type : "post",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : "json",
        data : {"selectedDate" : selectedDate},
        success : function(resp){
            //console.log(resp);
            addTodoLists(resp);
        },
        error : function(err, resp){
            console.log(err+"에러발생");
            console.log(resp);
        }
    });
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
        console.log(dateStr);
        return new Date(dateStr);
    }
}

function getDate4Ajax(idStr){
    if(idStr != ""){
        dateStr = "";
        dateStr += idStr.slice(0, 4);
        dateStr += "-";
        dateStr += idStr.slice(4, 6);
        dateStr += "-";
        dateStr += idStr.slice(-2);
        console.log(dateStr);
        return dateStr;
    }
}

function addTodoTable(){
    var lengthT = $("#toDoListsTable > tbody tr").length;
    if(lengthT > 0){
        console.log("delete rows");
        var todoT = document.getElementById("toDoListsTable");
        for(var i=lengthT-1; i>0; i--){
           var test = todoT.deleteRow(i);
        }
    }
}

function checkToDoInTable(trId, result) {
    console.log('checkToDoInTable');
    var selectorStr = "#" + trId + " .state";
    $(selectorStr).text(result);
}


function addTodo(result){
    var resultTodo = JSON.parse(result);

    if(resultTodo.length > 0){
        var table4Todo = document.getElementById("toDoListsTable");

        var i=0;
        for(var obj of resultTodo){
            var values = Object.values(obj);

            var newRaw = table4Todo.insertRow();
            newRaw.id = "td-tr-" + obj.toDoCode;
            var color = newRaw.insertCell(0);
            var content = newRaw.insertCell(1);
            var state = newRaw.insertCell(2);
            var deleteBtn = newRaw.insertCell(3);
            var editBtn = newRaw.insertCell(4);

            color.innerText = "■";
            color.id = values[5];
            deleteBtn.id = values[0];
            color.classList.add("color");
            content.classList.add("content");
            deleteBtn.classList.add("delete");
            editBtn.classList.add("edit");
            editBtn.classList.add(i);
            // TODO: className 추가
            state.className = "state";

            content.innerText = values[2];
            state.innerText = values[4];
            deleteBtn.innerText = "delete";
            editBtn.innerText = "edit";

            var tester = document.getElementById(values[5]);
            var colorTodo = "#" + values[5];
            $(tester).css("color", values[5]);
            i++;
        }
    }
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

// TODO: memberCode 입력부분 필요
// TODO: dataType => JSON
function readToDo(clickedDate){

     $.ajax({
             url : "/readCalendar",
             type : "post",
             contentType: 'application/x-www-form-urlencoded; charset=utf-8',
             dataType : "text",
             data : {"selectedDate" : clickedDate,
                     "memberCode" : 2
             },
             success : function(result){
                 addTodoTable();
                 addTodo(result);
             },
             error : function(err){
                 console.log(err+"에러발생");
             }
      });
}

// TODO: memberCode 입력부분 필요
// TODO: dataType => JSON(Done)
var readToDoInMonth = function readToDoInMonth(selectedDate){
    if (!selectedDate) selectedDate = getDate4Ajax($(".active").attr("id"));
    console.log('selectedDate :', selectedDate);
    var selectedMonth = selectedDate.slice(0, 7);
    console.log('readToDoInMonth')
    console.log(selectedMonth);

    $.ajax({
        url : "/readToDoInMonth",
        type : "post",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : "JSON",
        data : {"selectedMonth" : selectedMonth,
                "memberCode" : 2
        },
        success : function(result){
            console.log(result);
            addTodoOnCalendar(result);
        },
        error : function(err){
            console.log(err+"에러발생");
        }
    });
}

function deleteTodo(deleteid, selectedDate){
      $.ajax({
             url : "/toDoDelete",
             type : "post",
             contentType: 'application/x-www-form-urlencoded; charset=utf-8',
             dataType : "text",
             data : {"toDoCode" : deleteid},
             success : function(result){
                 console.log(result);
                 readToDo(selectedDate);
             },
             error : function(err){
                 console.log(err+"error");
             }
      });
}

function removeAllChildElements(parentElement){
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
}


function clickDate(pointDate){
    // 캘린더 화면에 접속하면 자동으로 해당일의 날짜가 클릭되어 활성화 상태가 된다.
    if (!pointDate) pointDate = new Date();
    var clickedDate = setDateId(pointDate, pointDate.getDate());
    var clickedDateElement = document.getElementById(clickedDate);
    console.log('clickedDate: ', clickedDate);
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
            if(clickedDate == "" || clickedDate.slice(0,2) == "td"){
                clickedDate = clickedDateElement.parentNode.id;
                clickedDateElement = clickedDateElement.parentNode;
            }
            clickedDateElement.classList.add('active');
            console.log('--------------debug-----------');
            console.log(getDateFromId(clickedDate));
            showCurrentDateOnLeft(getDateFromId(clickedDate));
            readToDo(getDate4Ajax(clickedDate))
        }
    }

//        console.log(e);
//        clickedDate1 = e.target;
//        clickedDate1.classList.add('active');
////        today = new Date(today.getFullYear(), today.getMonth(), clickedDate1.id);
//        let selectedDate = showMain();
//        keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();
//        reshowingList(selectedDate);
//    }
}

function loadCalendar(pointDate){
    // 캘린더 화면이 로드되면 현재 로그인한 member의 memberCode에 해당하는 toDo가
    // 현재 날짜의 월을 기준으로 읽어진다.
    if (!pointDate) pointDate = $(".active").attr("id");
    var clickedDate = pointDate;

    window.addEventListener("load", showToDoOnCalendar);
    function showToDoOnCalendar(e){
        readToDoInMonth(getDate4Ajax(clickedDate));
    }

}