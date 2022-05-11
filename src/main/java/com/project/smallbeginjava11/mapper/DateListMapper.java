package com.project.smallbeginjava11.mapper;

import com.project.smallbeginjava11.DTO.DateList;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Mapper
@Repository
public interface DateListMapper {
    void insertDateList(Map<String, Object> map);
    DateList selectDateList(int dateListCode);

}
