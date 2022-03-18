package com.project.smallbeginjava11.mapper;

import com.project.smallbeginjava11.DTO.Calendar;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface CalendarMapper {
    List<Calendar> getTodoList();
}
