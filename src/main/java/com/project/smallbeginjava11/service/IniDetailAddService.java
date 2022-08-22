package com.project.smallbeginjava11.service;

import com.project.smallbeginjava11.DTO.IniDetailAdd;
import com.project.smallbeginjava11.DTO.Initiative;

import java.text.ParseException;
import java.util.List;
import java.util.Map;

public interface IniDetailAddService {
    void insertIniDetailAdd(Map<String, Object> params) throws ParseException;
    List<Integer> calculateDaysInclude(Initiative initiative, List<Integer> list) throws ParseException;
    List<IniDetailAdd> combineIniDtlCodeAndPossibleDate(Map<String, Object> params) throws ParseException;

    // 월 단위일 경우 사용하는 메소드
    List<IniDetailAdd> combineIniDtlCodeAndIniDtlAdd(Map<String, Object> params) throws ParseException;
}
