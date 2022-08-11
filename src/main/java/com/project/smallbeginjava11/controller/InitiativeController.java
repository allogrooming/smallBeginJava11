package com.project.smallbeginjava11.controller;


import com.project.smallbeginjava11.DTO.Calendar;
import com.project.smallbeginjava11.DTO.Category;
import com.project.smallbeginjava11.DTO.Initiative;
import com.project.smallbeginjava11.service.CategoryService;
import com.project.smallbeginjava11.service.IniDetailService;
import com.project.smallbeginjava11.service.IniService;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;


@RestController
@RequiredArgsConstructor
public class InitiativeController {

    private final CategoryService categoryService;
    private final IniService iniService;
    private final IniDetailService iniDetailService;
    private static List<Date> monthDateList;

    // 무한스크롤 테스트 페이지 연결
    @GetMapping("/scroll")
    public ModelAndView scroll(ModelAndView modelAndView){
        modelAndView.setViewName("calendarScroll");
        return modelAndView;
    }

    @GetMapping("/initiative")
    public ModelAndView test(ModelAndView modelAndView){
        modelAndView.setViewName("ini");
        List<Category> category = categoryService.getAllCategory();
        modelAndView.addObject("category", category);
        return modelAndView;
    }

    @Transactional
    @RequestMapping(value="/readForm", produces="text/html;charset=UTF-8")
    @ResponseBody
    @PostMapping
    public String createInitiative(@RequestParam Map<String, Object> params) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        // Ob 코드
        //String obCodeString = param.get("obCode");
        //int obCode = Integer.parseInt(obCodeString);
        params.put("obCode", String.valueOf(2));

        // 달 주 일(iniPeriod)
        int iniPeriod = Integer.parseInt(String.valueOf(params.get("iniPeriod")));;
        params.put("iniPeriod", iniPeriod);

        //달 일 경우(2) : (기간) 개월 수 달의 같은 날짜까지
        //주 일 경우(1) : (기강) 주 수의 같은 요일까지
        //일의 경우(0) : 임의 설정

        // 시작일(iniStartDate)
        String iniStartDateString = String.valueOf(params.get("iniStartDate"));
        Date iniStartDate = sdf.parse(iniStartDateString);
        params.put("iniStartDate", iniStartDate);

        // 종료일(iniEndDate)
        String iniEndDateString = String.valueOf(params.get("iniEndDate"));
        Date iniEndDate = sdf.parse(iniEndDateString);
        params.put("iniEndDate", iniEndDate);

        // 전체 기간(iniDuration)
        long iniDurationLong = (iniEndDate.getTime() - iniStartDate.getTime()) / (24*60*60*1000);
        int iniDuration = Long.valueOf(iniDurationLong).intValue();
        params.put("iniDuration", iniDuration);

        // 전체 기간 동안 가능한 횟수(iniPossibleCount)
        switch (iniPeriod) {
            //매일이라면 : iniPeriod가 0이라면
            case 0:
                params.put("iniPossibleCount", String.valueOf(iniDuration));
                break;
            //매주라면 : iniPeriod가 1이라면
            case 1:
                Initiative initiative = iniDetailService.calculateWeeks(params);
                params.put("iniPossibleCount", String.valueOf(initiative.getIniPossibleCount()));
                params.put("iniDetails", initiative.getIniDetails());
                break;
            //매달 날짜를 직접 선택해서 입력할 경우
            case 2:
                params.put("iniPossibleCount", String.valueOf(monthDateList.size()));
                params.put("possibleDateList", monthDateList);
                break;
        }
        iniService.insertIni(params);
        return "readForm success";
    }


    @RequestMapping(value="/receiveDateList", produces = "text/html;charset=UTF-8")
    @PostMapping
    public String receiveDateList(@RequestParam(value = "dateList[]") List<String> dateList) throws ParseException {
        dateList.forEach(x -> System.out.println(x));
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        monthDateList = new ArrayList<Date>();

        for (String dateString : dateList) {
            monthDateList.add(sdf.parse(dateString));
        }

        return "getDateList success";
    }

}
