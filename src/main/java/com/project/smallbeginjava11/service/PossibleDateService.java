package com.project.smallbeginjava11.service;

import com.project.smallbeginjava11.DTO.Initiative;
import com.project.smallbeginjava11.DTO.PossibleDate;

import java.text.ParseException;
import java.util.List;
import java.util.Map;

public interface PossibleDateService {
    void insertPossibleDateList(Map<String, Object> params) throws ParseException;
    void insertPossibleDate(Map<String, Object> params) throws ParseException;
    List<PossibleDate> fromDateListToPossibleDateList(Initiative initiative) throws ParseException;
    List<PossibleDate> selectPossibleDateCodeByIniCode(Map<String, Object> params) throws ParseException;

    List<PossibleDate> convertFromDateToPossibleDate(Map<String, Object> params) throws ParseException;
}
