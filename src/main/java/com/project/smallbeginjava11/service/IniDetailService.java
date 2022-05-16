package com.project.smallbeginjava11.service;

import com.project.smallbeginjava11.DTO.IniDetail;
import com.project.smallbeginjava11.DTO.Initiative;

import java.text.ParseException;
import java.util.Date;
import java.util.List;
import java.util.Map;

public interface IniDetailService {
    void insertIniDetail(Map<String, Object> params) throws ParseException;
    Initiative calculateWeeks(Map<String, Object> params) throws ParseException;
    List<Integer> mapToDays(Map<String, Object> params) throws ParseException;
    int getDayOfWeek(List<IniDetail> iniDetails) throws ParseException;
    List<Integer> selectIniDtlCodes(Map<String, Object> params) throws ParseException;



}
