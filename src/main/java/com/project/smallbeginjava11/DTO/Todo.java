package com.project.smallbeginjava11.DTO;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Todo {
    int toDoCode;
    int memberCode;
    String toDoContent;
    Date setUpDate;
    int toDoState;
    String toDoColor;
    Date doneDate;
    Date planDate;
}
