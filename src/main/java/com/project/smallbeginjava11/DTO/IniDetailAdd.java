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

//TODO : 규칙설정 필요. 언제까지 Done가능?
public class IniDetailAdd {
    private int iniDetailAddCode; // sequence - sql에서 추가됨
    private int iniDetailCode; //
    private Date iniDetailAddDoneDate; //
    private int iniDetailAddState; //

}
