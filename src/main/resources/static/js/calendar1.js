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
    var dateStr = (pointDate.getDate() + 1).toString();
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
    let prevId = parseInt(setDateId(prevFirst, pointFirstWeekStartDay));
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
                $td.setAttribute('class', 'prev-month');
                if (prevLastWeekStartDate == prevLastDate) $td.setAttribute('class', 'prev-month month-end-date');
                $tr.appendChild($td);
                prevLastWeekStartDate++;
                prevId++;
            } else{
                var $td = document.createElement('td');
                var $div = document.createElement('div');
                $div.textContent = cnt;
                $td.appendChild($div);
                $td.setAttribute('id', pointId);
                // 달의 첫 날과 마지막 날 구분용 class
                if (cnt == 1) $td.setAttribute('class', 'month-start-date');
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
    var dateStr = (pointDate.getDate() + 1).toString();
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
//    console.log('pointFirst :', pointFirst);
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

function addTodoLists(resp){
    // toDoListsTable 이 있는지 확인
    // 그 다음 있으면 요소 삭제, 없으면 그대로 진행
    // 그러고 toDoLists에 테이블 id = toDoListsTable - resp 추가하기

    var todo = resp;
    var todoCount = resp.length;
    var toDoLists = document.getElementById("toDoListsTable");
    var tableCheck = !!document.getElementById("toDoListsTable");
    console.log(tableCheck);

    // table id=toDoListsTable을 toDoLists 안에 생성
    var toDoTable = "<table><tr><td>Color</td><td>Content</td><td>State</td></tr>";
    var first = "";
    var second = "";
    var third = "";

    for (var obj of todo){
        toDoTable += "<tr>";

        first = obj[Object.keys(obj)[5]];
        toDoTable += "<td>"
        toDoTable += first;
        toDoTable += "</td>";

        second = obj[Object.keys(obj)[2]];
        toDoTable += "<td>"
        toDoTable += second;
        toDoTable += "</td>";

        third = obj[Object.keys(obj)[4]];
        toDoTable += "<td>"
        toDoTable += third;
        toDoTable += "</td>";

        toDoTable += "</tr>";

    }
    toDoTable += "</table>";

    console.log(toDoTable)
    $(toDoLists).html(toDoTable);
}


function addTodoList(){
    var $div = document.createElement('div');
    var temp = document.getElementById('input-box');
    $div.textContent = '-' + temp.value;
    var $btn = document.createElement('button');
    $btn.setAttribute('type', 'button');
    $btn.setAttribute('id', 'del-ata');
    $btn.setAttribute('id', dataCnt+keyValue);
    $btn.setAttribute('class', "del-data");
    $btn.textContent = delText;
    console.log("$div at addTodoList : ", $div);
    console.log("$btn at addTodoList : ", $btn);
    console.log("input-list : ", inputList);
    var inputList2 = document.getElementById('input-list');
    inputList2.appendChild($div);
    inputList2.appendChild($btn);
    //inputList.appendChild($div);
    //inputList.appendChild($btn);
    todoList[keyValue].push(temp.value);
    dataCnt++;
    temp.value = '';
    //$div.addEventListener('click',checkList);
    //$btn.addEventListener('click',deleteTodo);
    function deleteTodo(){
        $div.remove();
        $btn.remove();
    }
}
function checkList(e){
    e.currentTarget.classList.add('checked');
}

//TODO : 새로 추가 된 함수
function showIniAndObList(resp){
    // iniAndObTable이 있는지 확인
    // 그 다음 있으면 요소 삭제, 없으면 그대로 진행
    // 그러고 iniAndObTable에 테이블 id = iniAndObTable - resp 추가하기
    var iniAndOb = resp;
    var iniAndObTable = document.getElementById("iniAndObTable");
    var tableCheck = !!document.getElementById("iniAndObTable");

    let selectedDate = showMain();
    var tdDate = new Date(selectedDate);
    var str = "<tr><td>Ob Content</td><td>Ini Content</td><td>State</td></tr>";
    for (var obj of iniAndOb){
        var dateList = obj["dateList"];
        var monthList = obj["plannedDateList"];
        if (dateList && tdDate > new Date(obj.iniStartDate) && tdDate < new Date(obj.iniEndDate)){
            var dayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
            for (day of dayList){
                if(dateList[day] == "1" && dayList.indexOf(day) == tdDate.getDay()){
                    str += "<tr id=" + obj.categoryCode + ">";
                    str += "<td>" + obj.obContent + "</td>";
                    str += "<td>" + obj.iniContent + "</td>";
                    str += "<td><input type='checkbox'></td>";
                    str += "</tr>";
                }
            }
        } else if (monthList){
            for (date of monthList){
                if (selectedDate == date){
                    str += "<tr id=" + obj.categoryCode + ">";
                    str += "<td>" + obj.obContent + "</td>";
                    str += "<td>" + obj.iniContent + "</td>";
                    str += "<td><input type='checkbox'></td>";
                    str += "</tr>";
                }
            }
        }
    }
    $(iniAndObTable).html(str);
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

//clickedDate1.classList.add('active');
//var prevBtn = document.getElementById('prev');
//var nextBtn = document.getElementById('next');
//prevBtn.addEventListener('click',prev);
//nextBtn.addEventListener('click',next);

function activeMainMonth(pointFirst){
    var clickedDate = document.getElementById(pointDate, pointDate.getDate());
    var pointPageYear = getPageYear(pointFirst);
    var mainMonthTable = [];
    for(let i = 1; i <= pointPageYear[pointFirst.getMonth()]; i++){
        tdGroup[i] = document.getElementById(i);
        tdGroup[i].addEventListener('click', changeToday);
    }
    function changeToday(e){
        for(let i = 1; i <= pointPageYear[pointFirst.getMonth()]; i++){
            if(tdGroup[i].classList.contains('active')){
                tdGroup[i].classList.remove('active');
            }
        }
        console.log(e);
        clickedDate1 = e.target;
        clickedDate1.classList.add('active');
        let selectedDate = showMain();
        keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();
        reshowingList(selectedDate);
    }
}

function getDateFromId(idStr){
    dateStr = "";
    dateStr += idStr.slice(0, 4);
    dateStr += "-";
    dateStr += idStr.slice(4, 6);
    dateStr += "-";
    dateStr += idStr.slice(-2);
    console.log(dateStr);
    return new Date(dateStr);
}

function clickDate(pointDate){
    // 캘린더 화면에 접속하면 자동으로 해당일의 날짜가 클릭되어 활성화 상태가 된다.
    if (!pointDate) pointDate = new Date();
    var clickedDate = setDateId(pointDate, pointDate.getDate());
    var clickedDateElement = document.getElementById(clickedDate);
    console.log('clickedDate: ', clickedDate);
    clickedDateElement.classList.add('active');

    // TODO: 하위 엘리멘트도 이벤트가 등록되게 해야 함
    tdList = $("#calendar-body td");
    for (td of tdList){
        td.addEventListener('click', changeClickedDate);
    }
    function changeClickedDate(e){
        if (clickedDateElement != e.target){
            clickedDateElement.classList.remove('active');
            clickedDateElement = e.target;
            clickedDate = e.target.id;
            e.target.classList.add('active');
            console.log(getDateFromId(clickedDate));
            showCurrentDateOnLeft(getDateFromId(clickedDate));
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
