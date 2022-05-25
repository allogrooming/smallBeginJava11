package com.project.smallbeginjava11.DTO;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PossibleDateList {
    private int psbDtLsCode; // PossibleDateListCode
    private int iniCode; // Initiative Code
    private List<PossibleDate> possibleDateList = new ArrayList<PossibleDate>();// PossibleDateList

}
