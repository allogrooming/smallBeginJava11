package com.project.smallbeginjava11.DTO;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PossibleDate {
    private int psbDtCode; // PossibleDateCode
    private int psbDtLsCode; // PossibleDateListCode
    private Date psbDt; // PossibleDate

}
