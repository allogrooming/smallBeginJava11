package com.project.smallbeginjava11.service;

import com.project.smallbeginjava11.DTO.IniDetail;
import com.project.smallbeginjava11.DTO.Initiative;

import java.text.ParseException;
import java.util.Date;
import java.util.List;
import java.util.Map;

public interface IniService {
    void insertIni(Map<String, Object> params) throws ParseException;
    Initiative getDateListCodeOrMonthListCode(Map<String, Object> map) throws ParseException;
    Initiative getRecentIniCodeByObCode(Map<String, Object> map);

}
