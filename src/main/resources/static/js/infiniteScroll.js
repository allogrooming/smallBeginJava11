function YesScroll() {
    console.log('scroll test');
    const pagination = document.querySelector('.btn-wrap clearfix'); // 페이지네이션 정보획득
    const fullContent = document.querySelector('.content-right'); // 전체를 둘러싼 컨텐츠 정보획득
    const screenHeight = screen.height; // 화면 크기

    var flag = false; // 일회용 글로벌 변수
    document.addEventListener('scroll',OnScroll,{passive:true}) // 스크롤 이벤트함수정의
    console.log('screenHeight :', screenHeight)

    function OnScroll () { //스크롤 이벤트 함수
        const fullHeight = fullContent.clientHeight; // content-right 클래스의 높이
        const scrollPosition = pageYOffset; // 스크롤 위치

        console.log('fullHeight :', fullHeight);
        console.log('scrollPosition :', scrollPosition);
        console.log('screenHeight/3 :', screenHeight/3);

        if (screenHeight/3 >= scrollPosition && !flag) { // 만약 전체높이-화면높이/2가 스크롤포지션보다 작아진다면, 그리고 oneTime 변수가 거짓이라면
//        if (fullHeight-screenHeight/2 <= scrollPosition) { // 만약 전체높이-화면높이/2가 스크롤포지션보다 작아진다면, 그리고 oneTime 변수가 거짓이라면
//        if (screenHeight/2 >= scrollPosition) { // 만약 전체높이-화면높이/2가 스크롤포지션보다 작아진다면, 그리고 oneTime 변수가 거짓이라면
            console.log('if works ---------------------------------');
//            flag = true; // oneTime 변수를 true로 변경해주고,
//            flag = next(flag); // 컨텐츠를 추가하는 함수를 불러온다.
              flag = true;
              next(); // 컨텐츠를 추가하는 함수를 불러온다.
//            console.log(next)
        }
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