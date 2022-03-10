package com.project.smallbeginjava11.service;

import java.text.ParseException;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.project.smallbeginjava11.DTO.Initiative;

public interface IniService {
    void insertIni(Map<String, String> params) throws ParseException;
    Map<String, String>getRecentDateListCode(Map<String, String> map) throws ParseException;
    int getDayOfWeek(Date startDate, Date endDate, int iniDuration, Map<String, String> map) throws ParseException;
    List<String> getDateList(List<String> list);

}
