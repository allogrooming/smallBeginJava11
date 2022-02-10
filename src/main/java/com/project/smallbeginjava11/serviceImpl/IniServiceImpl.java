package com.project.smallbeginjava11.serviceImpl;

import com.project.smallbeginjava11.DTO.Initiative;
import com.project.smallbeginjava11.mapper.CategoryMapper;
import com.project.smallbeginjava11.mapper.IniMapper;
import com.project.smallbeginjava11.service.DateListService;
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
    private final DateListService dateListService;

    @Override
    public void insertIni(Map<String, String> params) throws ParseException {

        // DTO에 파라미터 값들 넣어주고 DTO를 Mapper로 넘겨주어 insert 실행
        //Initiative initiative = new Initiative(obCode, iniPeriod, iniCount, iniContent, iniStartDate, iniEndDate);
        System.out.println("ServiceImpl - DTO");
        //initiative.getIniData();
        iniMapper.insertIni(params);

        if (Integer.parseInt(params.get("iniPeriod")) == 1){
            Map<String, String> map= getRecentDateListCode(params);
            params.put("dateListCode", String.valueOf(map.get("dateListCode")));
            params.put("iniCode", String.valueOf(map.get("iniCode")));
            dateListService.updateDateList(params);
        }
    }

    @Override
    public Map<String, String> getRecentDateListCode(Map<String, String> map) throws ParseException {
        return iniMapper.selectRecentDateListCodeAndIniCode(map);
    }


}
