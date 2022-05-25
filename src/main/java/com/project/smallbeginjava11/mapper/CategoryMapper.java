package com.project.smallbeginjava11.mapper;

import com.project.smallbeginjava11.DTO.Category;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface CategoryMapper {
    List<Category> getAllCategory();
    Category selectCategory(String code);
}
