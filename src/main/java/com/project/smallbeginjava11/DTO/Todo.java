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
public class Todo {
    int to_do_code;
    int member_code;
    String to_do_content;
    Date set_up_date;
    int to_do_state;
    String to_do_color;
    Date done_date;
    Date plan_date;
}
