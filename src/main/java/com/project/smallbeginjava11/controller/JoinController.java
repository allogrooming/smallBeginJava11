package com.project.smallbeginjava11.controller;

import com.project.smallbeginjava11.service.JoinService;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

@RestController
@RequiredArgsConstructor
public class JoinController {
    private final JoinService joinService;

    @GetMapping("/joinUs")
    public ModelAndView signin(){
        ModelAndView modelAndView = new ModelAndView("joinUs");
        return modelAndView;
    }

    @Transactional
    @RequestMapping(value="/joinProcess", produces="text/html;charset=UTF-8")
    @PostMapping
    @ResponseBody
    public String joinProcess(@RequestParam Map<String, Object> params){
        System.out.println("joinProcess");
        System.out.println(params);
        joinService.joinProcess(params);
        return "success";
    }

    @GetMapping("/home")
    public ModelAndView home(){
        ModelAndView modelAndView = new ModelAndView("home");
        return modelAndView;
    }
}
