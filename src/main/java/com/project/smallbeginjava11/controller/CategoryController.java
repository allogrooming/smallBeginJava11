package com.project.smallbeginjava11.controller;

import com.project.smallbeginjava11.DTO.Category;
import com.project.smallbeginjava11.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.View;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping("/getAllCategory")
    public List<Category> getAllCategory(Model model){
        List<Category> category = categoryService.getAllCategory();
        model.addAttribute("category", category);
        return category;
    }

  /*  @GetMapping("/index")
    public ModelAndView categoryIndex(){
        List<Category> category = categoryService.getAllCategory();
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("categoryTest");
        modelAndView.addObject("category", category);
        return modelAndView;
    }*/

    @GetMapping("/index")
    public ModelAndView categoryIndex(){
        List<Category> category = categoryService.getAllCategory();
        ModelAndView modelAndView = new ModelAndView("categoryTest");
        modelAndView.addObject("category", category);
        return modelAndView;
    }

    @GetMapping("/navbar.html")
    public ModelAndView navbar(){
        ModelAndView modelAndView = new ModelAndView("navbar");
        return modelAndView;
    }
}
