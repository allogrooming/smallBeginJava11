package com.project.smallbeginjava11.service;

import java.text.ParseException;
import java.util.Map;

public interface JoinService {
    void inputJoin(Map<String, String> param) throws ParseException;
}