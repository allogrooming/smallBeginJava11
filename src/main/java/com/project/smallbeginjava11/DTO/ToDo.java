package com.project.smallbeginjava11.DTO;

import lombok.*;

import java.util.Date;

@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ToDo {
    int toDoCode;
    int memberCode;
    String toDoContent;
    Date setUpDate;
    int toDoState;
    String toDoColor;
    Date doneDate;
    Date planDate;
}
