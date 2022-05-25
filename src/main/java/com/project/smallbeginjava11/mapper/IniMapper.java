package com.project.smallbeginjava11.mapper;

import com.project.smallbeginjava11.DTO.Initiative;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Mapper
@Repository
public interface IniMapper {
    void insertIni(Map<String, Object> params);
    Initiative selectMaxIniByObCode(Map<String, Object> map);

}
