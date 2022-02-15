package com.project.smallbeginjava11.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.project.smallbeginjava11.DTO.Initiative;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface IniMapper {
    void insertIni(Map<String, String> params);
    Initiative selectIniCodeAndDateListCode(Map<String, String> map);

}
