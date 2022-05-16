package com.project.smallbeginjava11.service;

import com.project.smallbeginjava11.DTO.Initiative;

import java.text.ParseException;
import java.util.List;

public interface IniDetailAddService {
    void insertIniDetailAdd(List<Integer> list) throws ParseException;
    List<Integer> calculateDaysInclude(Initiative initiative, List<Integer> list) throws ParseException;
}
