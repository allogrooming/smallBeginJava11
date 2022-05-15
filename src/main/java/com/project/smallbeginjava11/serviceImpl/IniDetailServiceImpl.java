package com.project.smallbeginjava11.serviceImpl;

import com.project.smallbeginjava11.DTO.IniDetail;
import com.project.smallbeginjava11.DTO.Initiative;
import com.project.smallbeginjava11.mapper.IniDetailMapper;
import com.project.smallbeginjava11.service.IniDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.*;

@Service
@RequiredArgsConstructor
public class IniDetailServiceImpl implements IniDetailService {

    private final IniDetailMapper iniDetailMapper;

    @Override
    public void insertIniDetail(Map<String, Object> params) throws ParseException {
        iniDetailMapper.insertIniDetail(params);
    }

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


    //TODO : 메소드 나누기
    @Override
    public Initiative calculateWeeks(Date startDate, Date endDate, int iniDuration, Map<String, Object> params) throws ParseException{
        Calendar cal = Calendar.getInstance();
        Initiative initiative = new Initiative();
        ArrayList<IniDetail> iniDetails = (ArrayList<IniDetail>) initiative.getIniDetails();
        List<Integer> days = mapToDays(params);

        int weeks = iniDuration / 7;
        int leftDays = iniDuration % 7;

        cal.setTime(startDate);
        for (int i = 0; i < weeks; i++){
            IniDetail iniDetail = new IniDetail();
            iniDetail.setIniDetailCode(i + 1);
            cal.add(Calendar.DATE, 1);
            iniDetail.setIniDetailStartDate(cal.getTime());
            cal.add(Calendar.DATE, 6);
            Date iniDtlEndDate = cal.getTime();
            iniDetail.setIniDetailEndDate(iniDtlEndDate);
            iniDetail.setIniDetailPossibleCount(days.size());
            iniDetails.add(iniDetail);
        }

        cal.setTime(endDate);
        if (leftDays != 0) {
            int leftPsbDays = 0;
            IniDetail iniDetail = new IniDetail();
            for (int j = 0; leftDays - j > 0; j++) {
                cal.setTime(endDate);
                cal.add(Calendar.DATE, -j);
                for (int day : days) {
                    if(cal.get(Calendar.DAY_OF_WEEK) == day){
                        leftPsbDays++;
                    }
                }
            }
            iniDetail.setIniDetailEndDate(endDate);
            iniDetail.setIniDetailPossibleCount(leftPsbDays);
            iniDetails.add(iniDetail);
        }

        int psbCount = getDayOfWeek(iniDetails);
        initiative.setIniStartDate(startDate);
        initiative.setIniEndDate(endDate);
        initiative.setIniPossibleCount(psbCount);
        initiative.setIniDetails(iniDetails);
        return initiative;
    }

    //매주일 경우 실행가능횟수를 구하는 메소드
    @Override
    public int getDayOfWeek(List<IniDetail> iniDetails){
        int total = 0;
        for (IniDetail iniDetail : iniDetails) {
            total += iniDetail.getIniDetailPossibleCount();
        }
        return total;
    }

}
