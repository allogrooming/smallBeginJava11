package com.project.smallbeginjava11.controller;

import com.project.smallbeginjava11.service.JoinService;
import com.project.smallbeginjava11.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.text.ParseException;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class JoinController {

    private final LoginService loginService;
    private final JoinService joinService;

    @GetMapping("/joinUs")
    public ModelAndView signin(){
        ModelAndView modelAndView = new ModelAndView("joinUs");
        return modelAndView;
    }

    @GetMapping("/joinProcess")
    public String joinProcess(@RequestParam Map<String, String> params){
        joinService.joinProcess(params);
        return "success";
    }

    // 로그인 페이지 보여줌 대신 쿠키에 memberCode 저장되어 있으면 안보여줌
    @GetMapping("/login")
    public ModelAndView login(){
        ModelAndView modelAndView = new ModelAndView("login");

        // 쿠키 판별

        return modelAndView;
    }

    @Transactional
    @RequestMapping(value="/loginProcess", produces="text/html;charset=UTF-8")
    @ResponseBody
    @PostMapping
    public String loginProcess(@RequestBody Map<String, String> params, HttpServletResponse response) throws ParseException {

        System.out.println("login process");
        System.out.println(params);

        //HttpSession session = request.getSession();

        //로그인이 되면 memberCode를 리턴하거나 False를 리턴
        String result = loginService.loginProcess(params);
        System.out.println(result);

        if(result == null){
            return "failed";
        }else{
            Cookie memberCookie = new Cookie("memberCode", result);
            response.addCookie(memberCookie);
            return result;
        }
    }
}
