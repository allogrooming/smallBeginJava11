package com.project.smallbeginjava11;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import javax.sql.DataSource;


@SpringBootApplication
public class SmallBeginJava11Application {


    public static void main(String[] args) {
        SpringApplication.run(SmallBeginJava11Application.class, args);
    }
//
//    @Bean
//    public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
//        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
//        sessionFactory.setDataSource(dataSource);
//        System.out.println(dataSource);
//        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
//        sessionFactory.setMapperLocations(resolver.getResources("classpath:mybatis/mappers/*.xml"));
//
//        Resource myBatisConfig = new PathMatchingResourcePatternResolver().getResource("classpat:mybatis/mybatis-config.xml");
//        sessionFactory.setConfigLocation(myBatisConfig);
//
//        return sessionFactory.getObject();
//    }

}
