package com.project.smallbeginjava11.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Mapper
@Repository
public interface PossibleDateMapper {
    void insertPossibleDateList(Map<String, Object> params);
    void insertPossibleDate(Map<String, Object> params);

}
