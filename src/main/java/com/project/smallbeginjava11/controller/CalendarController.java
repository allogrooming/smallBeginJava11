package com.project.smallbeginjava11.controller;

import com.project.smallbeginjava11.DTO.Calendar;
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

    @RequestMapping("/calendar")
    public ModelAndView calendar(@RequestParam @Nullable Map<String, String> param){

        System.out.println("param - Calendar");
        System.out.println(param);

        if(param == null){
            System.out.println("first calendar");
            // 무한스크롤 확인용 임시
            ModelAndView modelAndView = new ModelAndView("calendar1");
            return modelAndView;
        }else{
            System.out.println("Got the param");
            System.out.println(param);
            String selectedDate = param.get("param");

            System.out.println(selectedDate);

            // 무한스크롤 확인용 임시
            ModelAndView modelAndView = new ModelAndView("calendar1");

            System.out.println("Send the result");

            return modelAndView;
        }
    }

    // 임시 calendar1.html 연결용
    @RequestMapping("/calendar1")
    public ModelAndView calendar1(@RequestParam @Nullable Map<String, String> param){

        if(param == null){
            System.out.println("first calendar");
            // 무한스크롤 확인용 임시
            ModelAndView modelAndView = new ModelAndView("calendar1");
            return modelAndView;
        }else{
            System.out.println("Got the param");
            System.out.println(param);
            String selectedDate = param.get("param");

            System.out.println(selectedDate);

            // 무한스크롤 확인용 임시
            ModelAndView modelAndView = new ModelAndView("calendar1");
            System.out.println("Send the result");

            return modelAndView;
        }




    }
/*  @Transactional
    @RequestMapping(value="/readCalendar", produces="text/html;charset=UTF-8", method = RequestMethod.POST)
    @ResponseBody
    public RedirectView readCalendar(@RequestParam Map<String, String> param, RedirectAttributes re) throws ParseException {

        //String selectedDate = param.get("selectedDate");
        System.out.println("param - readCalendar");
        System.out.println(param);
        
        // 이제 됨
        re.addAttribute("param", param.get("selectedDate"));
        System.out.println("addAttribute");
        System.out.println(re);
        return new RedirectView("/calendar");
    }*/

    @Transactional
    @RequestMapping(value="/readToDoList")
    @ResponseBody
    public List<Todo> readCalendar(@RequestParam Map<String, Object> param) {
        //String selectedDate = String.valueOf(param.get("clickedDate"));
        System.out.println("readTodo------------------------------");

        List<Todo> todo = calendarService.getTodoList(param);
        todo.forEach(x -> System.out.println(x));
        return todo;
    }

    @Transactional
    @RequestMapping(value="/readToDoInMonth")
    @ResponseBody
    public List<Todo> readToDoInMonth(@RequestParam Map<String, Object> param) throws ParseException {
        String selectedMonth = String.valueOf(param.get("selectedMonth"));
        System.out.println("readToDoInMonth");
        System.out.println(selectedMonth);
        List<Todo> todoList = calendarService.getTodoListInMonth(param);
        System.out.println(todoList);
        return todoList;
    }

    @Transactional
    @RequestMapping(value="/toDoListInsert", produces="text/html;charset=UTF-8")
    @ResponseBody
    @PostMapping
    public String toDoListInsert(@RequestParam Map<String, Object> params) throws ParseException {

        System.out.println("toDoListInsert");

        for (String key : params.keySet()) {
            System.out.println(key + " : " + params.get(key));
        }

        calendarService.inputTodoList(params);

        return "success";
    }

    @Transactional
    @RequestMapping(value="/toDoDelete", produces="text/html;charset=UTF-8")
    @ResponseBody
    @PostMapping
    public String toDoDelete(@RequestParam Map<String, String> params) throws ParseException {

        System.out.println("toDoDelete");
        calendarService.toDoDelete(params);
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
