package com.project.smallbeginjava11.serviceImpl;

import com.project.smallbeginjava11.DTO.Initiative;
import com.project.smallbeginjava11.mapper.IniMapper;
import com.project.smallbeginjava11.service.IniService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.Date;

@Service
@RequiredArgsConstructor
public class IniServiceImpl implements IniService{

    private final IniMapper iniMapper;

    @Override
    public void insertIni(int obCode, int iniPeriod, int iniCount, String iniContent, Date iniStartDate, Date iniEndDate) throws ParseException {

        // DTO에 파라미터 값들 넣어주고 DTO를 Mapper로 넘겨주어 insert 실행
        Initiative initiative = new Initiative(obCode, iniPeriod, iniCount, iniContent, iniStartDate, iniEndDate);
        System.out.println("ServiceImpl - DTO");
        initiative.getIniData();
        iniMapper.insertIni(initiative);
    }

    @Override
    public void insertIni2(int obCode, int iniPeriod, int iniCount, String iniContent, Date iniStartDate, Date iniEndDate) throws ParseException {

        // DTO에 파라미터 값들 넣어주고 DTO를 Mapper로 넘겨주어 insert 실행
        Initiative initiative = new Initiative(obCode, iniPeriod, iniCount, iniContent, iniStartDate, iniEndDate);
        System.out.println("ServiceImpl - DTO");
        initiative.getIniData();
        iniMapper.insertIni(initiative);
    }
}
