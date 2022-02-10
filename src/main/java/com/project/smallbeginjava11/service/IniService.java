package com.project.smallbeginjava11.service;

import java.text.ParseException;
import java.util.Map;

public interface IniService {
    void insertIni(Map<String, String> params) throws ParseException;
    Map<String, String>getRecentDateListCode(Map<String, String> map) throws ParseException;
}
