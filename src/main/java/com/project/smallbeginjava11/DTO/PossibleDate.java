package com.project.smallbeginjava11.DTO;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PossibleDate implements Comparable<PossibleDate> {
    private int psbDtCode; // PossibleDateCode
    private int psbDtLsCode; // PossibleDateListCode
    private Date psbDt; // PossibleDate


    @Override
    public int compareTo(PossibleDate o) {

        if (this.psbDt.compareTo(o.psbDt) == 0) {
             return 0;
        } else if (this.psbDt.compareTo(o.psbDt) > 0) {
            return 1;
        } else {
            return -1;
        }

    }

}
