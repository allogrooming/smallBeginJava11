package com.project.smallbeginjava11.mapper;

import com.project.smallbeginjava11.DTO.PossibleDate;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface PossibleDateMapper {
    void insertPossibleDateList(Map<String, Object> params);
    void insertPossibleDate(Map<String, Object> params);
    List<PossibleDate> selectPossibleDateCodeByIniCode(Map<String, Object> params);
}
