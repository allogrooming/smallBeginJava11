package com.project.smallbeginjava11.mapper;

import com.project.smallbeginjava11.DTO.Calendar;
import com.project.smallbeginjava11.DTO.Todo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface CalendarMapper {
//    List<Todo> getTodoList(String selectedDate);
    List<Todo> getTodoList(Map<String, Object> params);
    void inputTodoList(Map<String, String> params);
    List<Calendar> selectIniAndObList(Map<String, Object> map);
    List<Todo> getTodoListInMonth(Map<String, Object> params);
    void updateToDoState(Map<String, Object> params);
}
