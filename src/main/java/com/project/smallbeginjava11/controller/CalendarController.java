package com.project.smallbeginjava11.controller;

import com.project.smallbeginjava11.DTO.Todo;
import com.project.smallbeginjava11.service.CalendarService;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.Nullable;
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

    @RequestMapping("/calendar1")
    public ModelAndView calendar1(@RequestParam @Nullable Map<String, String> param){

        if(param == null){
            ModelAndView modelAndView = new ModelAndView("calendar1");
            return modelAndView;
        }else{
            String selectedDate = param.get("param");
            ModelAndView modelAndView = new ModelAndView("calendar1");
            return modelAndView;
        }




    }

    @Transactional
    @RequestMapping(value="/readToDoList")
    @ResponseBody
    public List<Todo> readCalendar(@RequestParam Map<String, Object> param) {
        List<Todo> todo = calendarService.getTodoList(param);
        return todo;
    }

    @Transactional
    @RequestMapping(value="/readToDoInMonth")
    @ResponseBody
    public List<Todo> readToDoInMonth(@RequestParam Map<String, Object> param) throws ParseException {
        String selectedMonth = String.valueOf(param.get("selectedMonth"));
        List<Todo> todoList = calendarService.getTodoListInMonth(param);
        return todoList;
    }

    @Transactional
    @RequestMapping(value="/toDoListInsert", produces="text/html;charset=UTF-8")
    @ResponseBody
    @PostMapping
    public String toDoListInsert(@RequestParam Map<String, Object> params) throws ParseException {
        calendarService.inputTodoList(params);
        return "success";
    }

    @Transactional
    @RequestMapping(value="/toDoDelete", produces="text/html;charset=UTF-8")
    @ResponseBody
    @PostMapping
    public String toDoDelete(@RequestParam Map<String, String> params) throws ParseException {
        calendarService.toDoDelete(params);
        return "success";
    }

    @Transactional
    @RequestMapping(value="/editToDo", produces="text/html;charset=UTF-8")
    @ResponseBody
    @PostMapping
    public String editToDo(@RequestParam Map<String, String> params) throws ParseException {
        calendarService.editToDo(params);
        return "success";
    }

    @RequestMapping(value="/updateToDoState")
    @ResponseBody
    @PostMapping
    public String updateToDoState(@RequestParam Map<String, Object> params) throws ParseException{
        String toDoState = String.valueOf(calendarService.updateToDoState(params));
        return toDoState;
    }
}
