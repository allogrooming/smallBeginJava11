package com.project.smallbeginjava11.service;

import java.text.ParseException;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.project.smallbeginjava11.DTO.Initiative;

public interface IniService {
    void insertIni(Map<String, Object> params) throws ParseException;
}
