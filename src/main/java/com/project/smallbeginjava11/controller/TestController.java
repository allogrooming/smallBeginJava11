package com.project.smallbeginjava11.controller;


import com.project.smallbeginjava11.DTO.*;
import com.project.smallbeginjava11.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;


@RestController
@RequiredArgsConstructor
public class TestController {

    private final CategoryService categoryService;
    private final IniService iniService;

    @GetMapping("/test")
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
    public String test2(@RequestParam Map<String, String> params) throws ParseException {

        for (String key : params.keySet()) {
            System.out.println(key + " : " + params.get(key) + " & " + params.get(key).getClass().getName());
        }


        // Ob 코드
        //String obCodeString = param.get("obCode");
        //int obCode = Integer.parseInt(obCodeString);
        params.put("obCode", String.valueOf(1));


        // 달 주 일(iniPeriod)
        int iniPeriod = Integer.parseInt(params.get("iniPeriod"));

        //달 일 경우(2) : (기간) 개월 수 달의 같은 날짜까지
        //주 일 경우(1) : (기강) 주 수의 같은 요일까지
        //일의 경우(0) : 임의 설정
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

        // 시작일(iniStartDate)
        String iniStartDateString = params.get("iniStartDate");
        Date iniStartDate = sdf.parse(iniStartDateString);

        // 종료일(iniEndDate)
        String iniEndDateString = params.get("iniEndDate");
        Date iniEndDate = sdf.parse(iniEndDateString);

        // 전체 기간(iniDuration)
        long iniDurationLong = (iniEndDate.getTime() - iniStartDate.getTime()) / (24*60*60*1000);
        System.out.println("long 타입으로 iniDuration(전체기간) "+iniDurationLong);
        int iniDuration = Long.valueOf(iniDurationLong).intValue();
        System.out.println("int 타입으로 iniDuration "+iniDuration);


        // 전체 기간 동안 가능한 횟수(iniPossibleCount)
        switch (iniPeriod) {
            //매일이라면 : iniPeriod가 0이라면
            case 0:
                params.put("iniPossibleCount", String.valueOf(iniDuration));
                break;
            //매주라면 : iniPeriod가 1이라면
            case 1:
                int total = iniService.getDayOfWeek(iniStartDate, iniEndDate, iniDuration,params);
                params.put("iniPossibleCount", String.valueOf(total));
                break;

        }

        //dateListCode??? 이거는 어떻게 추가할지? 매일이면 0123456



        // 한 주마다 몇 번씩 진행할 것인지(iniCount)
        //int iniCount = 0;
        //if(iniPeriod == 2){
            //iniCount = 7;
        //}

        // iniOrder

        // ini 내용(iniContent)
        //String iniContent = params.get("iniContent");

        // iniMonthDate

        iniService.insertIni(params);

        return "success";
    }

}
