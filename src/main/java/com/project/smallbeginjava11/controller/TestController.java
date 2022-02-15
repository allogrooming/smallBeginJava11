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

        return "success";
    }


    @RequestMapping(value="/ajaxTest", produces = "text/html;charset=UTF-8")
    public String ajaxTest(){
        System.out.println(categoryService.getAllCategory());
        return categoryService.getAllCategory().toString();
    }


}
