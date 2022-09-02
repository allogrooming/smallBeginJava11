package com.project.smallbeginjava11.config;

import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;


@Configuration
@ConfigurationPropertiesScan("com.project.smallbeginjava11.config")
@EnableConfigurationProperties({DataSourceProperties.class})
public class DataSourceConfig {

    @Bean
    public DataSource DataSource(){
        DataSourceProperties dataSourceProperties = new DataSourceProperties();
        System.out.print(dataSourceProperties);
        DataSource dataSource = DataSourceBuilder.create()
                                .url(dataSourceProperties.getUrl())
                                .driverClassName(dataSourceProperties.getDriverClassName())
                                .username(dataSourceProperties.getUsername())
                                .password(dataSourceProperties.getPassword())
                                .build();
        System.out.println(dataSource);
        return dataSource;
    }

}
