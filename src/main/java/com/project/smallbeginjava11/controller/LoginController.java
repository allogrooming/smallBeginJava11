package com.project.smallbeginjava11.controller;

import com.project.smallbeginjava11.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.ParseException;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    // 로그인 페이지 보여줌 대신 쿠키에 memberCode 저장되어 있으면 안보여줌
    @GetMapping("/login")
    public ModelAndView login(){
        ModelAndView modelAndView = new ModelAndView("login");

        // 쿠키 판별

        return modelAndView;
    }

    @Transactional
    @RequestMapping(value="/loginProcess", produces="text/html;charset=UTF-8")
    @PostMapping
    @ResponseBody
    public String loginProcess(@RequestBody Map<String, String> params, HttpServletRequest request, Model model) throws ParseException {

        System.out.println("login process");
        System.out.println(params);

        HttpSession session = request.getSession();

        //기존 세션값 삭제
        if(session.getAttribute("memberCode") != null) {
            session.removeAttribute("memberCode");
        }

        //로그인이 되면 memberCode를 리턴하거나 False를 리턴
        String result = loginService.loginProcess(params);
        System.out.println(result);

        if(result == null){
            return "failed";
        }else{
/*            Cookie memberCookie = new Cookie("memberCode", result);
            response.addCookie(memberCookie);*/
            session.setAttribute("memberCode", result);
            return result;
        }
    }
}
