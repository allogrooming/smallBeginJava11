package com.project.smallbeginjava11.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Calendar {
    private int obCode;
    private String obContent;
    private int iniCode;
    private int memberCode;
    private int categoryCode;
    private int dateListCode;
    private int monthListCode;
    private Date iniStartDate;
    private Date iniEndDate;
    private int iniWeekOrder;
    private int iniDuration;
    private int iniPeriod;
    private String iniContent;

    //private Date plannedDate; //(일자)
    //private int plannedDay; //(요일)

    // <일자/요일 리스트> //
    private DateList dateList;
    private List<String> plannedDateList;
    private List<Integer> plannedDayList;

}
