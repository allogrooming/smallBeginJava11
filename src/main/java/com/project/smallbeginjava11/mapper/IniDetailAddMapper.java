package com.project.smallbeginjava11.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface IniDetailAddMapper {
    void insertIniDetailAdd(List<Integer> list);
}
