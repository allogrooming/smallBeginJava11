package com.project.smallbeginjava11.serviceImpl;


import com.project.smallbeginjava11.DTO.ToDo;
import com.project.smallbeginjava11.mapper.CalendarMapper;
import com.project.smallbeginjava11.service.CalendarService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CalendarServiceImpl implements CalendarService {

    private final CalendarMapper calendarMapper;

    @Override
    public List<ToDo> getToDoList(String selectedDate){
        return calendarMapper.getToDoList(selectedDate);
    }

}
