package com.project.smallbeginjava11.controller;


import com.project.smallbeginjava11.DTO.*;
import com.project.smallbeginjava11.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.text.ParseException;
import java.text.SimpleDateFormat;
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

    @RequestMapping(value="/readForm", produces="text/html;charset=UTF-8")
    @ResponseBody
    @PostMapping
    public String test2(@RequestParam Map<String, String> param) throws ParseException {
/*        for (String key : param.keySet()) {
            System.out.println(key + " : " + param.get(key) + " & " + param.get(key).getClass().getName());
        }*/

        // Ob 코드
        String obCodeString = param.get("obCode");
        int obCode = Integer.parseInt(obCodeString);

        //dateListCode??? 이거는 어떻게 추가할지? 매일이면 0123456

        // 달 주 일(iniPeriod)
        String iniPeriodString = param.get("iniPeriod");
        int iniPeriod = Integer.parseInt(iniPeriodString);

        // 한 주마다 몇 번씩 진행할 것인지(iniCount)
        int iniCount = 0;
        if(iniPeriod == 2){
            iniCount = 7;
        }

        // iniOrder

        // ini 내용(iniContent)
        String iniContent = param.get("iniContent");

        // iniMonthDate

        // 시작일(iniStartDate)
        String iniStartDateString = param.get("iniStartDate");
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-mm-dd");
        Date iniStartDate = sdf.parse(iniStartDateString);

        // 종료일(iniEndDate)
        String iniEndDateString = param.get("iniEndDate");
        Date iniEndDate = sdf.parse(iniEndDateString);

        // 전체 기간(iniDuration)
        long iniDurationLong = (iniEndDate.getTime() - iniStartDate.getTime()) / (24*60*60*1000);
        System.out.println("long 타입으로 iniDuration(전체기간) "+iniDurationLong);
        int iniDuration = Long.valueOf(iniDurationLong).intValue();
        System.out.println("int 타입으로 iniDuration "+iniDuration);

        // 전체 기간 동안 가능한 횟수(iniPossibleCount)

        //iniService.insertIni(obCode, iniPeriod, iniCount, iniContent, iniStartDate, iniEndDate);

        return "success";
    }


    @RequestMapping(value="/ajaxTest", produces = "text/html;charset=UTF-8")
    public String ajaxTest(){
        System.out.println(categoryService.getAllCategory());
        return categoryService.getAllCategory().toString();
    }


}
