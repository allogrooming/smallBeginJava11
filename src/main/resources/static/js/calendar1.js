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

function linkMonthToMonth(headMonthCode, tailMonthCode){
    var linkedMonthFList = document.createDocumentFragment();

    var preMonthLastWeek = headMonthCode.lastElementChild;
    var preMonthLastWeekEmptyDays = preMonthLastWeek.getElementsByClassName(0);
    var mainMonthFirstWeek = tailMonthCode.firstElementChild;
    var mainMonthFirstWeekFilledDays = mainMonthFirstWeek.getElementsByClassName(1)
    const length = preMonthLastWeekEmptyDays.length;
    for (var i = 0; i < length; i++) {
        preMonthLastWeek.replaceChild(mainMonthFirstWeekFilledDays[0], preMonthLastWeekEmptyDays[0]);
    }
    tailMonthCode.removeChild(mainMonthFirstWeek);
    linkedMonthFList.append(headMonthCode);
    linkedMonthFList.append(tailMonthCode);
    return linkedMonthFList;
}


function attachPrevNextForMain(){
    var mainThisMonth = new Date();
    var tbodyPrevCode = showCalendar(prev(mainThisMonth), 100);
    var tbodyMainCode = showCalendar(mainThisMonth, 200);
    var tbodyNextCode = showCalendar(next(mainThisMonth), 300);

    console.log("********************");
    console.log(tbodyPrevCode.childNodes);
    console.log(tbodyPrevCode.lastElementChild);
    var preMonthLastWeek = tbodyPrevCode.lastElementChild;
    var preMonthLastWeekEmptyDays = preMonthLastWeek.getElementsByClassName(0);
    console.log('preMonthLastWeek');
    console.log(preMonthLastWeek);
    console.log('preMonthLastWeekEmptyDays');
    console.log(preMonthLastWeekEmptyDays);
    var mainMonthFirstWeek = tbodyMainCode.firstElementChild;
    var mainMonthFirstWeekFilledDays = mainMonthFirstWeek.getElementsByClassName(1)
    console.log('mainMonthFirstWeek');
    console.log(mainMonthFirstWeek);
    console.log('mainMonthFirstWeekFilledDays');
    console.log(mainMonthFirstWeekFilledDays);
    console.log('preMonthLastWeekEmptyDays.length :', preMonthLastWeekEmptyDays.length);
    const length = preMonthLastWeekEmptyDays.length;
    for (var i = 0; i < length; i++) {
        console.log('i :', i);
        console.log('preMonthLastWeekEmptyDays.length :', preMonthLastWeekEmptyDays.length);
        console.log('mainMonthFirstWeekFilledDays[i] :', mainMonthFirstWeekFilledDays[0]);
        console.log(' preMonthLastWeekEmptyDays[i] :',  preMonthLastWeekEmptyDays[0]);
        preMonthLastWeek.replaceChild(mainMonthFirstWeekFilledDays[0], preMonthLastWeekEmptyDays[0]);
    }
    tbodyMainCode.removeChild(mainMonthFirstWeek);
    console.log("********************");
    console.log('preMonthLastWeek');
    console.log(preMonthLastWeek.childNodes);
    console.log('preMonthLastWeekEmptyDays');
    console.log(preMonthLastWeekEmptyDays);
    console.log('mainMonthFirstWeek');
    console.log(mainMonthFirstWeek.childNodes);
    console.log('mainMonthFirstWeekFilledDays');
    console.log(mainMonthFirstWeekFilledDays);
    console.log("********************");

//    var linkedMonthList = linkMonthToMonth(tbodyMainCode, tbodyNextCode)
//    tbodyMainCode = linkedMonthList[0];
//    tbodyNextCode = linkedMonthList[1];


    document.getElementById("calendar-body").append(tbodyPrevCode);
    document.getElementById("calendar-body").append(tbodyMainCode);
    document.getElementById("calendar-body").append(tbodyNextCode);
}


// TODO: monthCnt 조정 필요
function attachNextForScroll(mainThisMonth, monthCnt){
    if (!mainThisMonth) mainThisMonth = next(new Date());
    var bottomMain = next(mainThisMonth);
    var tbodyNextCodeForScroll = showCalendar(bottomMain, monthCnt);
    document.getElementById("calendar-body").append(tbodyNextCodeForScroll);
    return bottomMain;
}

// TODO: monthCnt 조정 필요
function attachPrevForScroll(mainThisMonth, monthCnt){
    if (!mainThisMonth) mainThisMonth = prev(new Date());
    var topMain = prev(mainThisMonth);
    var tbodyPrevCodeForScroll = showCalendar(topMain, monthCnt);
    document.getElementById("calendar-body").before(tbodyPrevCodeForScroll);
    return topMain;
}

function setDateId(pointDate){
    var dateId = ""
    dateId += pointDate.getFullYear();
    var monthStr = (pointDate.getMonth() + 1).toString();
    dateId += monthStr.length < 2? "0" + monthStr : monthStr;
    dateId += "01";
    return dateId;
}

function showCalendar(pointDate, monthCnt){
    var tbodyFList = document.createDocumentFragment();
    var pointFirst = new Date(pointDate.getFullYear(), pointDate.getMonth(),1);
    var pointPageYear = getPageYear(pointDate);
//    let monthCnt = '200';
    let id = parseInt(setDateId(pointDate));
    let cnt = 1;
//    var tbodyCode;
    for(var i = 1; i < 7; i++){ //주에 대한 for문
        var $tr = document.createElement('tr');
        $tr.setAttribute('id', monthCnt + i);
        for(var j = 0; j < 7; j++){
            if((i === 1 && j < pointFirst.getDay()) || cnt > pointPageYear[pointFirst.getMonth()]){
                var $td = document.createElement('td');
                $td.setAttribute('class', 0);
                $tr.appendChild($td);
            }else{
                var $td = document.createElement('td');
                $td.textContent = cnt;
                var CNT = cnt.toString();
                $td.setAttribute('id', id);
                $td.setAttribute('class', 1);
                $tr.appendChild($td);
                cnt++;
                id++;
            }
        }
//        monthCnt++;
        console.log($tr);
        tbodyFList.appendChild($tr);
        // 주차 수 관리
        if (cnt > pointPageYear[pointFirst.getMonth()]) break;
    }
//    showMain();
    return tbodyFList;
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


// 원본 prev 메소드
//function prev(){
//    let preBox = document.getElementById('toDoContent').value;
//    preBox.value = '';
//    const $divs = document.querySelectorAll('#input-list > div');
///*    console.log("$divs");
//    console.log($divs);*/
//    $divs.forEach(function(e){
//        e.remove(); //
//    });
//    const $btns = document.querySelectorAll('#input-list > button');
//    $btns.forEach(function(e1){
//        e1.remove();
//    });
//    if(pageFirst.getMonth() === 1){ //현재 1월일 경우 이전 년도 보여주기
//        pageFirst = new Date(first.getFullYear()-1, 12, 1);
//        first = pageFirst;
//        if(first.getFullYear() % 4 === 0){
//            pageYear = leapYear;
//        }else{
//            pageYear = notLeapYear;
//        }
//    }else{
//        pageFirst = new Date(first.getFullYear(), first.getMonth()-1, 1);
//        first = pageFirst;
//    }
//    // 이전으로 클릭 될때 날짜가 같은 달에 대해서 오늘로 보여줌(달력에 크게 띄우는거)
//    today = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
////    removeCalendar();
//    showCalendar();
//    showMain();
//    clickedDate1 = document.getElementById(today.getDate());
//    clickedDate1.classList.add('active');
//    clickStart();
//    reshowingList();
//}

function next(pointDate){
    var pointFirst = new Date(pointDate.getFullYear(), pointDate.getMonth(),1);
    console.log('pointFirst :', pointFirst);
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
    console.log('pointNext :', pointNext);
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

/*function reshowingList(){
    keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();
    let reshowList = document.getElementById('input-list').value;
    if(todoList[keyValue] === undefined){
        reshowList.remove();
        todoList[keyValue] = [];
        const $divs = document.querySelectorAll('#input-list > div');
        $divs.forEach(function(e){
            e.remove();
        });
        const $btns = document.querySelectorAll('#input-list > button');
        $btns.forEach(function(e1){
            e1.remove();
        });
    }else if(todoList[keyValue].length ===0){
        reshowList.remove();
        const $divs = document.querySelectorAll('#input-list > div');
        $divs.forEach(function(e){
            e.remove();
        });
        const $btns = document.querySelectorAll('#input-list > button');
        $btns.forEach(function(e1){
            e1.remove();
        });
    }else{
        const $divs = document.querySelectorAll('#input-list > div');
        $divs.forEach(function(e){
            e.remove();
        });
        const $btns = document.querySelectorAll('#input-list > button');
        $btns.forEach(function(e1){
            e1.remove();
        });
        var $div = document.createElement('div');
        for(var i = 0; i < todoList[keyValue].length; i++){
            var $div = document.createElement('div');
            $div.textContent = '-' + todoList[keyValue][i];
            var $btn = document.createElement('button');
            $btn.setAttribute('type', 'button');
            $btn.setAttribute('id', 'del-ata');
            $btn.setAttribute('id', dataCnt+keyValue);
            $btn.setAttribute('class', 'del-data');
            $btn.textContent = delText;
            inputList.appendChild($div);
            inputList.appendChild($btn);
            $div.addEventListener('click',checkList);
            $btn.addEventListener('click',deleteTodo);
            inputBox.value = '';
            function deleteTodo(){
                $div.remove();
                $btn.remove();
            }
        }
    }
}*/

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
var clickedDate1 = document.getElementById(today.getDate());
//clickedDate1.classList.add('active');
//var prevBtn = document.getElementById('prev');
//var nextBtn = document.getElementById('next');
//prevBtn.addEventListener('click',prev);
//nextBtn.addEventListener('click',next);
var tdGroup = [];
function clickStart(pointFirst){
    var pointPageYear = getPageYear(pointFirst);
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
//        today = new Date(today.getFullYear(), today.getMonth(), clickedDate1.id);
        let selectedDate = showMain();
        keyValue = today.getFullYear() + '' + today.getMonth()+ '' + today.getDate();
        reshowingList(selectedDate);
    }
}
