package com.project.smallbeginjava11.mapper;

import java.util.List;

import com.project.smallbeginjava11.DTO.Category;
import org.apache.ibatis.annotations.Mapper;

import com.project.smallbeginjava11.DTO.Initiative;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface IniMapper {
    List<Category> insertIni();
}
