package com.project.smallbeginjava11.serviceImpl;

import com.project.smallbeginjava11.DTO.IniDetailAdd;
import com.project.smallbeginjava11.DTO.Initiative;
import com.project.smallbeginjava11.DTO.PossibleDate;
import com.project.smallbeginjava11.mapper.IniMapper;
import com.project.smallbeginjava11.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class IniServiceImpl implements IniService{

    private final IniMapper iniMapper;
    private final DateListService dateListService;
    private final MonthListService monthListService;
    private final IniDetailService iniDetailService;
    private final IniDetailAddService iniDetailAddService;
    private final PossibleDateService possibleDateService;

    @Override
    public List<Integer> mapToDays(Map<String, Object> params) throws ParseException {
        ArrayList<Integer> days = new ArrayList<Integer>();

        if(params.containsKey("mon")) days.add(2);
        if(params.containsKey("tue")) days.add(3);
        if(params.containsKey("wed")) days.add(4);
        if(params.containsKey("thu")) days.add(5);
        if(params.containsKey("fri")) days.add(6);
        if(params.containsKey("sat")) days.add(7);
        if(params.containsKey("sun")) days.add(1);

        return days;
    }

    @Override
    public void insertIni(Map<String, Object> params) throws ParseException {
        iniMapper.insertIni(params);
        Initiative iniByObCode = iniMapper.selectMaxIniByObCode(params);
        params.put("iniCode", iniByObCode.getIniCode());

        String monthListCode = String.valueOf(iniByObCode.getMonthListCode());
        String dateListCode = String.valueOf(iniByObCode.getDateListCode());

        possibleDateService.insertPossibleDateList(params);

        if (dateListCode != "null"){
            params.put("dateListCode", dateListCode);
            dateListService.insertDateList(params);

            Initiative iniForDetail = iniDetailService.calculateWeeks(params);
            List<PossibleDate> possibleDateList = possibleDateService.fromDateListToPossibleDateList(iniForDetail);
            params.put("possibleDateList", possibleDateList);

            System.out.println("1) possibleDateList : ****************************");
            possibleDateList.forEach(possibleDate -> System.out.println(possibleDate.getPsbDt()));
            System.out.println("****************************");

            possibleDateService.insertPossibleDate(params);
            List<PossibleDate> possibleDateCodeList = possibleDateService.selectPossibleDateCodeByIniCode(params);
            params.put("possibleDateCodeList", possibleDateCodeList);

            System.out.println("2) possibleDateCodeList : ****************************");
            possibleDateCodeList.forEach(possibleDate -> System.out.println(possibleDate.getPsbDtCode()));
            System.out.println("****************************");

            params.put("iniPossibleCount", String.valueOf(iniForDetail.getIniPossibleCount()));
            params.put("iniDetails", iniForDetail.getIniDetails());
            possibleDateList.forEach(possibleDate -> System.out.println(possibleDate));
            iniDetailService.insertIniDetail(params);

            List<Integer> iniDtlCodeList = iniDetailService.selectIniDtlCodes(params);
            params.put("iniDtlCodeList", iniDtlCodeList);
            List<Integer> iniDtlCountList = iniDetailAddService.calculateDaysInclude(iniForDetail, iniDtlCodeList);
            params.put("iniDtlCountList", iniDtlCountList);

            System.out.println("3) iniDtlCountList : ****************************");
            iniDtlCountList.forEach(y -> System.out.println(y));
            System.out.println("****************************");

            List<IniDetailAdd> iniDtlAddList = iniDetailAddService.combineIniDtlCodeAndPossibleDate(params);
            params.put("iniDtlAddList", iniDtlAddList);

            iniDetailAddService.insertIniDetailAdd(params);

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
    public Initiative getRecentIniCodeByObCode(Map <String, Object> map) throws ParseException {
        return iniMapper.selectMaxIniByObCode(map);
    }




}
