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

    //Reference
    private int obCode;

    private int dateListCode;
    private int iniDuration;
    private int iniPeriod;
    private int iniCount;
    private int iniOrder;
    private String iniContent;
    private Date iniMonthDate;
    private Date iniStartDate;
    private Date iniEndDate;
    private int iniPossibleCount;

}

