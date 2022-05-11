package com.project.smallbeginjava11.mapper;

import com.project.smallbeginjava11.DTO.MonthList;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface MonthListMapper {
    void insertMonthList(Map<String, Object> list);
    List<String> selectMonthList(int monthListCode);

}
