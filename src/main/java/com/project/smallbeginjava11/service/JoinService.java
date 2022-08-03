package com.project.smallbeginjava11.service;

import java.text.ParseException;
import java.util.Map;

public interface JoinService {
    void inputJoin(Map<String, String> param) throws ParseException;
    int checkId(Map<String, String> memberId);
    int checkNick(Map<String, String> nickname);
}