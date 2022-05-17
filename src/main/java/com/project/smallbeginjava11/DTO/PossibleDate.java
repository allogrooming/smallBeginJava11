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
public class PossibleDate {
    private int psbDtCode; // PossibleDateCode
    private int psbDtLsCode; // PossibleDateListCode
    private Date psbDt; // PossibleDate

}
