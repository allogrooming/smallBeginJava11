package com.project.smallbeginjava11.controller;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

public class CalendarController {

    @GetMapping("/calendar")
    public ModelAndView calendar(){
        ModelAndView modelAndView = new ModelAndView("calendar");
        return modelAndView;
    }

    @Transactional
    @RequestMapping(value="/todoList", produces="text/html;charset=UTF-8")
    @ResponseBody
    @PostMapping
    public String toDoList(@RequestParam Map<String, String> param){

        System.out.println("selected Date");
        System.out.println(param);

        return "success";
    }
}
