package com.project.smallbeginjava11.service;

import com.project.smallbeginjava11.DTO.Category;

import java.util.List;

public interface CategoryService {
    List<Category> getAllCategory();
    Category selectCategory(String code);
}
