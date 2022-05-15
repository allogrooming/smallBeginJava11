package com.project.smallbeginjava11.serviceImpl;

import com.project.smallbeginjava11.DTO.IniDetail;
import com.project.smallbeginjava11.DTO.Initiative;
import com.project.smallbeginjava11.mapper.IniMapper;
import com.project.smallbeginjava11.service.DateListService;
import com.project.smallbeginjava11.service.IniDetailService;
import com.project.smallbeginjava11.service.IniService;
import com.project.smallbeginjava11.service.MonthListService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.*;

@Service
@RequiredArgsConstructor
public class IniServiceImpl implements IniService{

    private final IniMapper iniMapper;
    private final DateListService dateListService;
    private final MonthListService monthListService;
    private final IniDetailService iniDetailService;

    @Override
    public void insertIni(Map<String, Object> params) throws ParseException {
        iniMapper.insertIni(params);
        Initiative initiative = iniMapper.selectMaxIniByObCode(params);
        params.put("iniCode", initiative.getIniCode());

        String monthListCode = String.valueOf(initiative.getMonthListCode());
        String dateListCode = String.valueOf(initiative.getDateListCode());

        if (dateListCode != "null"){
            params.put("dateListCode", dateListCode);
            dateListService.insertDateList(params);

            iniDetailService.insertIniDetail(params);

        } else if(monthListCode != "null"){
            params.put("monthListCode", monthListCode);
            monthListService.insertMonthList(params);
        }
    }

    // Initiative가 입력된 다음 MonthListCode나 DateListCode를 가져온다.
    @Override
    public Initiative getDateListCodeOrMonthListCode(Map<String, Object> map) throws ParseException {
        return iniMapper.selectMaxIniByObCode(map);
    }

    //Initiative가 입력된 다음 해당 IniCode를 반환한다.
    @Override
    public Initiative getRecentIniCodeByObCode(Map <String, Object> map){
        return iniMapper.selectMaxIniByObCode(map);
    }



}
