package com.project.smallbeginjava11;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(value = "com.project.smallbeginjava11.mapper")
public class SmallBeginJava11Application {

    public static void main(String[] args) {
        SpringApplication.run(SmallBeginJava11Application.class, args);
    }

}
