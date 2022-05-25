package com.project.smallbeginjava11.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface IniDetailMapper {
    void insertIniDetail(Map<String, Object> params);
    List<Integer> selectIniDtlCodes(Map<String, Object> params);
}
