package com.project.smallbeginjava11.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Initiative {
    private int iniCode;
    private int obCode;
    private int dateListCode;  // 뭐였지
    private int iniDuration;
    private int iniPeriod;
    private int iniCount;  // 한 주 마다 몇번씩 하는지 세는거
    private int iniOrder;
    private String iniContent;
    private Date iniMonthDate; // 달로 선택했을 경우 날짜
    private Date iniStartDate;
    private Date iniEndDate;
    private int iniPossibleCount; // 전체 기간 동안 가능한 횟수
}
