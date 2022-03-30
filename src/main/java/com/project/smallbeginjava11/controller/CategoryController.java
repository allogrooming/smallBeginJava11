package com.project.smallbeginjava11.controller;

import com.project.smallbeginjava11.DTO.Category;
import com.project.smallbeginjava11.DTO.Temp;
import com.project.smallbeginjava11.service.CategoryService;
import com.project.smallbeginjava11.service.TempService;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;
    private final TempService tempService;

/*
    @GetMapping("/getAllCategory")
    public List<Category> getAllCategory(Model model){
        List<Category> category = categoryService.getAllCategory();
        model.addAttribute("category", category);
        return category;
    }*/

  /*  @GetMapping("/index")
    public ModelAndView categoryIndex(){
        List<Category> category = categoryService.getAllCategory();
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("categoryTest");
        modelAndView.addObject("category", category);
        return modelAndView;
    }*/

    @GetMapping("/category")
    public ModelAndView categoryIndex(){
        List<Category> category = categoryService.getAllCategory();
        ModelAndView modelAndView = new ModelAndView("category");
        modelAndView.addObject("category", category);
        System.out.println(category);
        List<Temp> tempList = tempService.getTemp();
        modelAndView.addObject("temp", tempList);
        System.out.println(tempList);
        return modelAndView;
    }

/*    @PostMapping("/objective")
    public ModelAndView objectivePage(String categoryCode){
        String code = categoryCode;
        System.out.println("Controller : code parameter "+code);
        List<Category> code4Ob = categoryService.selectCategory(code);
        System.out.println("Controller"+code4Ob);
        ModelAndView modelAndView = new ModelAndView("objective");
        modelAndView.addObject("category", code4Ob);
        return modelAndView;
    }*/

    @RequestMapping("/objective")
    public ModelAndView objectivePage(HttpServletRequest request){
        String code = request.getParameter("code");
        System.out.println("Controller : code parameter "+code);

        Category code4Ob = categoryService.selectCategory(code);
        System.out.println("Controller"+code4Ob);
        ModelAndView modelAndView = new ModelAndView("objective");
        modelAndView.addObject("category", code4Ob);
        return modelAndView;
    }

    @Transactional
    @RequestMapping(value="/readOBForm", produces="text/html;charset=UTF-8")
    @ResponseBody
    @PostMapping
    public ModelAndView obAdd(@RequestParam Map<String, String> params) throws ParseException {

        System.out.println("obAdd Controller");
        for(String key : params.keySet()){
            System.out.println(key + " : "+params.get(key));
        }

        ModelAndView modelAndView = new ModelAndView("ini");
        //modelAndView.addObject("objective", code4Ob);
        return modelAndView;
    }

    @GetMapping("/login")
    public ModelAndView login(){
        ModelAndView modelAndView = new ModelAndView("login");
        return modelAndView;
    }

    @GetMapping("/joinus")
    public ModelAndView signin(){
        ModelAndView modelAndView = new ModelAndView("joinUs");
        return modelAndView;
    }

    @GetMapping("/home")
    public ModelAndView home(){
        ModelAndView modelAndView = new ModelAndView("home");
        return modelAndView;
    }

}
