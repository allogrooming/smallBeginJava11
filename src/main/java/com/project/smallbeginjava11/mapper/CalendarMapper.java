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
    void inputTodoList(Map<String, Object> params);
    List<Todo> getTodoList(Map<String, Object> params);
    List<Calendar> selectIniAndObList(Map<String, Object> map);
    List<Todo> getTodoListInMonth(Map<String, Object> params);
    void updateToDoState(Map<String, Object> params);
    void toDoDelete(Map<String, String> params);
    void editToDo(Map<String, Object> params);
}
