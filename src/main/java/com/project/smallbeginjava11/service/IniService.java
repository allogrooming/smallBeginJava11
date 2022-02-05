package com.project.smallbeginjava11.service;

import java.text.ParseException;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.project.smallbeginjava11.DTO.Initiative;

public interface IniService {
    void insertIni(int obCode, int iniPeriod, int iniCount, String iniContent, Date iniStartDate, Date iniEndDate) throws ParseException;

    void insertIni2(int obCode, int iniPeriod, int iniCount, String iniContent, Date iniStartDate, Date iniEndDate) throws ParseException;
}
