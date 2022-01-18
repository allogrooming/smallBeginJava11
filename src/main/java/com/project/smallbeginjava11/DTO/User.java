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
public class User {

    private int memberCode;
    private String memberId;
    private String password;
    private String email;
    private Date signUpDate;
    private int activeState;


}