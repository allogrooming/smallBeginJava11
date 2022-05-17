package com.project.smallbeginjava11.service;

import com.project.smallbeginjava11.DTO.Initiative;

import java.text.ParseException;
import java.util.List;
import java.util.Map;

public interface PossibleDateService {
    void insertPossibleDataList(Map<String, Object> params) throws ParseException;
}
