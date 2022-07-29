package com.project.smallbeginjava11.controller;

import com.project.smallbeginjava11.service.JoinService;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.text.ParseException;
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
    @RequestMapping(value="/readJoinUs", produces="text/html;charset=UTF-8")
    @ResponseBody
    @PostMapping
    public String readJoinUs(@RequestParam Map<String, String> param) throws ParseException {

        System.out.println(param);
        joinService.inputJoin(param);

        //ModelAndView modelAndView = new ModelAndView("joinSuccess");
        System.out.println("move to joinSuccess");
        return "redirect:/joinSuccess";
    }

    @GetMapping("/joinSuccess")
    public ModelAndView joinSuccess(){
        ModelAndView modelAndView = new ModelAndView("joinSuccess");
        return modelAndView;
    }
}
