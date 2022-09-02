package com.project.smallbeginjava11.config;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@ToString
@Getter
@Setter
@Component
@ConfigurationProperties("spring.datasource")
public class DataSourceProperties {

    private String driverClassName;
    private String url;
    private String username;
    private String password;

}
