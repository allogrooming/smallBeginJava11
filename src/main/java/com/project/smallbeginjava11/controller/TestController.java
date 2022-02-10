package com.project.smallbeginjava11.controller;


import com.project.smallbeginjava11.DTO.*;
import com.project.smallbeginjava11.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
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

    @RequestMapping(value="/readForm", method = RequestMethod.POST, produces="html/text; charset=UTF-8")
    @ResponseBody
    public String test2(@RequestParam Map<String, Object> params) throws ParseException {

        for (String key : params.keySet()) {
            try {
                //String deKey = URLDecoder.decode(key, "UTF-8");
                System.out.println(URLDecoder.decode(key, "UTF-8") + " : " + URLDecoder.decode(params.get(key).toString(), "UTF-8"));
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
        }

        /*for (String key : param.keySet()) {
            try {
                String enKey = URLEncoder.encode(key, "UTF-8");
                String deKey = URLDecoder.decode(enKey, "UTF-8");
                String enValue = URLEncoder.encode(param.get(deKey), "UTF-8");
                String deValue = URLDecoder.decode(enValue, "UTF-8");
                System.out.println(deKey + " : " + deValue + " & " + deValue.getClass().getName());
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

        }*/
        // Ob 코드
       /* String obCodeString = params.get("obCode").toString();
        int obCode = Integer.parseInt(obCodeString);

        //dateListCode??? 이거는 어떻게 추가할지? 매일이면 0123456

        // 달 주 일(iniPeriod)
        String iniPeriodString = params.get("iniPeriod").toString();
        int iniPeriod = Integer.parseInt(iniPeriodString);

        // 한 주마다 몇 번씩 진행할 것인지(iniCount)
        int iniCount = 0;
        if(iniPeriod == 2){
            iniCount = 7;
        }

        // iniOrder

        // ini 내용(iniContent)
        String iniContent = params.get("iniContent").toString();

        // iniMonthDate

        // 시작일(iniStartDate)
        String iniStartDateString = params.get("iniStartDate").toString();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-mm-dd");
        Date iniStartDate = sdf.parse(iniStartDateString);

        // 종료일(iniEndDate)
        String iniEndDateString = params.get("iniEndDate").toString();
        Date iniEndDate = sdf.parse(iniEndDateString);

        // 전체 기간(iniDuration)
        long iniDurationLong = (iniEndDate.getTime() - iniStartDate.getTime()) / (24*60*60*1000);
        System.out.println("long 타입으로 iniDuration(전체기간) "+iniDurationLong);
        int iniDuration = Long.valueOf(iniDurationLong).intValue();
        System.out.println("int 타입으로 iniDuration "+iniDuration);*/

        // 전체 기간 동안 가능한 횟수(iniPossibleCount)

        iniService.insertIni(params);

        return "success";
    }


    @RequestMapping(value="/ajaxTest", produces = "text/html;charset=UTF-8")
    public String ajaxTest(){
        System.out.println(categoryService.getAllCategory());
        return categoryService.getAllCategory().toString();
    }


}
