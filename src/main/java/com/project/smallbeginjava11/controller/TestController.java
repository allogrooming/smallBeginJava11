package com.project.smallbeginjava11.controller;


import com.project.smallbeginjava11.DTO.Category;
import com.project.smallbeginjava11.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static java.lang.String.valueOf;


@RestController
@RequiredArgsConstructor
public class TestController {

    private final CategoryService categoryService;

    @GetMapping("/test")
    public ModelAndView test(ModelAndView modelAndView){
        modelAndView.setViewName("ini");
        List<Category> category = categoryService.getAllCategory();
        modelAndView.addObject("category", category);
        return modelAndView;
    }

    @RequestMapping(value="/readForm")
    public @ResponseBody Map<String,Object> test2(@RequestParam Map<String, String> param){
        System.out.println("????");
        for (String key : param.keySet()) {
            System.out.println(key + " : " + param.get(key));

        }

        Map<String, Object> map = new HashMap<>();
        map.put("key", "success?");

        return map;
    }

    @GetMapping("/iniTest")
    public ModelAndView intTest(ModelAndView modelAndView){
        modelAndView.setViewName("iniTest");
        return modelAndView;
    }

    @RequestMapping(value="/ajaxTest", produces = "text/html;charset=UTF-8")
    public String ajaxTest(){
        System.out.println(categoryService.getAllCategory());
        return categoryService.getAllCategory().toString();
    }


}
