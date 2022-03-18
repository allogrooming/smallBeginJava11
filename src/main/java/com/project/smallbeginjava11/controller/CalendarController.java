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
        ModelAndView modelAndView = new ModelAndView("calendar");
        return modelAndView;
    }


    // TODO : todo의 경우 ini와 다르게 완료했을 때 칼럼 X, 쿼리에서 donedate 여부로 판단해야됨
    @Transactional
    @RequestMapping(value="/readCalendar", produces="text/html;charset=UTF-8", method = RequestMethod.POST)
    @ResponseBody
    public ModelAndView readCalendar(@RequestParam Map<String, String> param) throws ParseException {

        String selectedDate = param.get("selectedDate");
        System.out.println(selectedDate);
        List<Calendar> result = calendarService.getTodoList(selectedDate);

        System.out.println(result);

        ModelAndView modelAndView = new ModelAndView("calendar");
        return modelAndView;
    }

}
