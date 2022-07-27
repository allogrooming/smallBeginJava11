package com.project.smallbeginjava11.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

@RestController
@RequiredArgsConstructor
public class JoinController {

    @GetMapping("/joinUs")
    public ModelAndView signin(){
        ModelAndView modelAndView = new ModelAndView("joinUs");
        return modelAndView;
    }

    @Transactional
    @RequestMapping(value="/readJoinUs")
    @ResponseBody
    public ModelAndView readJoinUs(@RequestParam Map<String, String> param){


        ModelAndView modelAndView = new ModelAndView("home");
        return modelAndView;
    }
}
