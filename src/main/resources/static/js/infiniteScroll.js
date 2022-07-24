function YesScroll() {
    console.log('*********************YesScroll test');
//    const pagination = document.querySelector('.btn-wrap clearfix'); // 페이지네이션 정보획득
//    const fullContent = document.querySelector('.content-right'); // 전체를 둘러싼 컨텐츠 정보획득
//    const screenHeight = screen.height; // 화면 크기
//

    var flag = false; // 일회용 글로벌 변수
    var bottomMonthDate;
    var topMonthDate;
    console.log('before bottomMonthDate :', bottomMonthDate);
    var nextMonthCnt = 400;
    document.addEventListener('scroll',OnScroll,{passive:true}) // 스크롤 이벤트함수정의
//    console.log('screenHeight :', screenHeight)

    function OnScroll () { //스크롤 이벤트 함수
        console.log('====================OnScroll test');

//        const fullHeight = fullContent.clientHeight; // content-right 클래스의 높이
//        const scrollPosition = pageYOffset; // 스크롤 위치

//        console.log('window.innerHeight :', window.innerHeight);
//        console.log('window.scrollY :', window.scrollY);
//        console.log('(window.innerHeight + window.scrollY) :', (window.innerHeight + window.scrollY));
//        console.log('document.body.offsetHeight :', document.body.offsetHeight);
//        console.log('(window.innerHeight + window.scrollY) >= document.body.offsetHeight');
        console.log((window.innerHeight + window.scrollY) >= document.body.offsetHeight);

        // TODO : calendar1.js - attachNextForScroll에서 monthCnt 조정 필요
        console.log('before bottomMonthDate :', bottomMonthDate);
        // 스크롤이 바닥에 닿았을 때
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !flag) { // 만약 전체높이-화면높이/2가 스크롤포지션보다 작아진다면, 그리고 oneTime 변수가 거짓이라면
            console.log('if works1 ---------------------------------');
            flag = true; // oneTime 변수를 true로 변경해주고,
//            flag = next(flag); // 컨텐츠를 추가하는 함수를 불러온다.
//            attachNext(bottomMonthDate, nextMonthCnt); // 컨텐츠를 추가하는 함수를 불러온다.
            bottomMonthDate = attachNextForScroll(bottomMonthDate, nextMonthCnt);
            flag = false;
            console.log('after bottomMonthDate :', bottomMonthDate);
        // TODO : 스크롤이 완전히 올라갔을 때는 아직 구현 안 됨
        // TODO : calendar1.js - attachPrevForScroll에서 monthCnt 조정 필요
        }
//        } else if (window.scrollY ==  0 && flag) {
//            console.log('if works2 ---------------------------------');
//            flag = true;
//            topMonthDate = attachPrevForScroll(topMonthDate, nextMonthCnt)
//            flag = false;
//        }
    }

//    function madeCalendar() {
//        const calendarBody = document.createElement('tbody');
//        const calendar = calendarBody.cloneNode('false');
//        calendarBody.className = 'calendar-body';
//
//        for (var i=0; i<5; i++){
//            calendar.appendChild(calendarBody.cloneNode('true'));
//        }
//        calendarBody.className = 'calendar-body';
//        fullContent.appendChild(calendar);
//        oneTime = false;
//    }
 }