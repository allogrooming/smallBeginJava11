package com.project.smallbeginjava11.service;

import java.util.List;
import java.util.Map;

public interface MonthListService {
    void insertMonthList(Map<String, Object> map);
    List<String> selectMonthList(int monthListCode);
}
