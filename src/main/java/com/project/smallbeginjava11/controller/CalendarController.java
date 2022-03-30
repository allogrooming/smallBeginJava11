package com.project.smallbeginjava11.controller;

import com.project.smallbeginjava11.DTO.Temp;
import com.project.smallbeginjava11.DTO.ToDo;
import com.project.smallbeginjava11.service.CalendarService;
import com.project.smallbeginjava11.service.TempService;
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
    private final TempService tempService;

    @GetMapping("/calendar")
    public ModelAndView calendar(){
        ModelAndView modelAndView = new ModelAndView("calendar");
        return modelAndView;
    }


    @Transactional
    @RequestMapping(value="/readCalendar", produces="text/html;charset=UTF-8", method = RequestMethod.POST)
    @ResponseBody
    public ModelAndView readCalendar(@RequestParam Map<String, String> param) throws ParseException {

        String selectedDate = param.get("selectedDate");
        System.out.println(selectedDate);
        List<ToDo> toDo = calendarService.getToDoList(selectedDate);
        List<Temp> temp = tempService.getTemp();

        System.out.println(toDo);
        System.out.println(temp);

        ModelAndView modelAndView = new ModelAndView("calendar");
        modelAndView.addObject("toDo", toDo);

        return modelAndView;
    }

}
