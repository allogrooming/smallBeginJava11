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
public class Objective {

    private int obCode;

    //Reference
    private int memberCode;
    private int categoryCode;

    private String obContent;
    private int obDuration;
    private Date obStartDate;
    private Date obEndDate;


}
