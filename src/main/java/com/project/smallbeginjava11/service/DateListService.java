package com.project.smallbeginjava11.service;

import com.project.smallbeginjava11.DTO.DateList;

import java.util.Map;

public interface DateListService {
    void insertDateList(Map<String, Object> map);
    DateList selectDateList(int dateListCode);

}
