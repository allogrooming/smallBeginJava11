package com.project.smallbeginjava11.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.project.smallbeginjava11.DTO.Initiative;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface IniMapper {
    void insertIni(Initiative initiative);
}
