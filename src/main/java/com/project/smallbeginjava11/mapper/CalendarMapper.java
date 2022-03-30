package com.project.smallbeginjava11.mapper;

import com.project.smallbeginjava11.DTO.ToDo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface CalendarMapper {
    List<ToDo> getToDoList(String selectedDate);
}
