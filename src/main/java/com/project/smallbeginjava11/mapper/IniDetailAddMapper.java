package com.project.smallbeginjava11.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Mapper
@Repository
public interface IniDetailAddMapper {
    void insertIniDetailAdd(Map<String, Object> params);
}