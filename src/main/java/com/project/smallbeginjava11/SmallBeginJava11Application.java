package com.project.smallbeginjava11;

import com.project.smallbeginjava11.config.DataSourceProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class SmallBeginJava11Application {

    @Autowired
    static DataSourceProperties dataSourceProperties;

    public static void main(String[] args) {
        System.out.println(dataSourceProperties);
        SpringApplication.run(SmallBeginJava11Application.class, args);
    }

}
