package com.project.smallbeginjava11.DTO;

import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Initiative {
    private int iniCode; // sequence - sql에서 추가됨
    private int obCode;
    private int dateListCode;  //
    private int monthListCode; //
    private int iniDuration; // 전체 기간 - 계산해줌(컨트롤러에서는 밑에 있음)
    private int iniPeriod;  // 달 주 일 중 하나 고르는거
    private int iniCount;  // 한 주 마다 몇번씩 하는지 세는거
    private int iniOrder;
    private String iniContent;
    private Date iniMonthDate; // 달로 선택했을 경우 날짜들의 집합
    private Date iniStartDate;
    private Date iniEndDate;
    private int iniPossibleCount; // 전체 기간 동안 가능한 횟수
    private List<IniDetail> iniDetails = new ArrayList<IniDetail>();
    private List<Integer> dateList = new ArrayList<Integer>(); // 주일 경우 요일을 나타내는 리스트

    public Initiative(int obCode, int iniPeriod, int iniCount, String iniContent, Date iniStartDate, Date iniEndDate, int iniDuration) {
        this.obCode = obCode;
        this.iniPeriod = iniPeriod;
        this.iniCount = iniCount;
        this.iniContent = iniContent;
        this.iniStartDate = iniStartDate;
        this.iniEndDate = iniEndDate;
        this.iniDuration = iniDuration;
    }
}
