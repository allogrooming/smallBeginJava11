package com.project.smallbeginjava11.serviceImpl;


import com.project.smallbeginjava11.DTO.Todo;
import com.project.smallbeginjava11.mapper.CalendarMapper;
import com.project.smallbeginjava11.service.CalendarService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class CalendarServiceImpl implements CalendarService {
    private final CalendarMapper calendarMapper;

    @Override
    public List<Todo> getTodoList(String selectedDate){
        return calendarMapper.getTodoList(selectedDate);
    }

    @Override
    public void inputTodoList(Map<String, String> params) throws ParseException {
        calendarMapper.inputTodoList(params);
    }
}
