package com.project.smallbeginjava11.service;

import com.project.smallbeginjava11.DTO.ToDo;

import java.util.List;

public interface CalendarService {
    List<ToDo> getToDoList(String selectedDate);
}
