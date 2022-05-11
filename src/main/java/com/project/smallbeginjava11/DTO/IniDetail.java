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
public class IniDetail {
    private int iniDetailCode; // sequence - sql에서 추가됨
    private int iniCode; // sequence - sql에서 추가됨
    private int weekOrder; // 주차??단위
    private Date iniDetailStartDate;
    private Date iniDetailEndDate;
    private int iniDetailPossibleCount; // 부분 기간 동안 가능한 횟수
    private int iniDetailDoneCount; // 부분 기간 동안 달성 횟수

}
