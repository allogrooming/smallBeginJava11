package com.project.smallbeginjava11.serviceImpl;

import com.project.smallbeginjava11.DTO.Initiative;
import com.project.smallbeginjava11.mapper.CategoryMapper;
import com.project.smallbeginjava11.mapper.DateListMapper;
import com.project.smallbeginjava11.mapper.IniMapper;
import com.project.smallbeginjava11.service.IniService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class IniServiceImpl implements IniService{

    private final IniMapper iniMapper;
    private final DateListMapper dateListMapper;

    @Override
    public void insertIni(Map<String, String> params) throws ParseException {

        // DTO에 파라미터 값들 넣어주고 DTO를 Mapper로 넘겨주어 insert 실행
        //Initiative initiative = new Initiative(obCode, iniPeriod, iniCount, iniContent, iniStartDate, iniEndDate);
        System.out.println("ServiceImpl - DTO");
        //initiative.getIniData();
        iniMapper.insertIni(params);
    }

}
