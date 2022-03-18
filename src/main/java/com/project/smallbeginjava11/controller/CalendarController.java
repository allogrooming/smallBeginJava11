package com.project.smallbeginjava11.controller;

import com.project.smallbeginjava11.DTO.Calendar;
import com.project.smallbeginjava11.service.CalendarService;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.text.ParseException;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class CalendarController {

    private final CalendarService calendarService;

    @GetMapping("/calendar")
    public ModelAndView calendar(){
        List<Calendar> to_do = calendarService.getTodoList();
        ModelAndView modelAndView = new ModelAndView("calendar");
        modelAndView.addObject("to_do", to_do);
        return modelAndView;
    }


    @Transactional
    @RequestMapping(value="/readCalendar", produces="text/html;charset=UTF-8")
    @ResponseBody
    @PostMapping
    public ModelAndView readCalendar(@RequestParam Map<String, String> param) throws ParseException {

        String selectedDate = param.get("selectedDate");
        System.out.println(selectedDate);

        ModelAndView modelAndView = new ModelAndView("calendar");
        return modelAndView;
    }

}
