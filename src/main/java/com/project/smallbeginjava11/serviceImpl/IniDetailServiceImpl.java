package com.project.smallbeginjava11.serviceImpl;

import com.project.smallbeginjava11.DTO.IniDetail;
import com.project.smallbeginjava11.DTO.IniDetailAdd;
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
    public Initiative calculateWeeks(Map<String, Object> params) throws ParseException{
        Date startDate = (Date) params.get("iniStartDate");
        System.out.println("iniStartDate : " + startDate.toString());
        Date endDate = (Date) params.get("iniEndDate");
        System.out.println("iniEndDate : " + endDate.toString());
        int duration = (int) params.get("iniDuration");
        System.out.println("iniDuration : " + duration);


        Calendar cal = Calendar.getInstance();
        Initiative initiative = new Initiative();
        ArrayList<IniDetail> iniDetails = (ArrayList<IniDetail>) initiative.getIniDetails();
        List<Integer> days = mapToDays(params);
        initiative.setDateList(days);

        int weeks = duration / 7;
        int leftDays = duration % 7;

        cal.setTime(startDate);
        for (int i = 0; i < weeks; i++){
            IniDetail iniDetail = new IniDetail();
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
                iniDetail.setIniDetailStartDate(cal.getTime());
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

    //매달일 경우 실행가능횟수를 구하는 메소드
    // TODO : 메소드 나누기
    @Override
    public List<IniDetail> calculateMonths(Map<String, Object> params) throws ParseException {
        Date startDate = (Date) params.get("iniStartDate");
        Date endDate = (Date) params.get("iniEndDate");
        List<Date> possibleDateList = (List<Date>) params.get("possibleDateList");
        possibleDateList.add(0, startDate);
        possibleDateList.add(possibleDateList.size(), endDate);

        List<IniDetail> iniDetails = new ArrayList<IniDetail>();
        Calendar cal = Calendar.getInstance();

        // 캘린더 형태로 변환
        cal.setTime(startDate);
        Collections.sort(possibleDateList);
        Map<Integer, List<Calendar>> monthMap = new HashMap<Integer, List<Calendar>>();
        for (int i = 0; i < possibleDateList.size(); i++){
            System.out.println("i : " + i);
            cal.setTime(possibleDateList.get(i));
            System.out.println(cal.getTime().toString());

            int month  = cal.get(Calendar.MONTH);
            System.out.println("month : " + (month + 1));
            if (!monthMap.containsKey(month)) {
                System.out.println("!monthMap.containsKey(month))");
                List<Calendar> calendarList = new ArrayList<Calendar>();

                calendarList.add(cal);
                System.out.println(cal.getTime().toString());
                System.out.println("-------------------calendarList----------------");
                calendarList.forEach(x -> System.out.println(x.getTime().toString()));
                monthMap.put(month, calendarList);
            }else {
                System.out.println("else)");
                List<Calendar> calendarList = monthMap.get(month);
                calendarList.add(cal);
                System.out.println(cal.getTime().toString());
                System.out.println("-------------------calendarList----------------");
                calendarList.forEach(x -> System.out.println(x.getTime().toString()));
            }
        }

        // 캘린더 초기화
        cal.setTime(startDate);
        List<Integer> monthMapKeys = new ArrayList<>(monthMap.keySet());
        int monthMapKeysSize = monthMapKeys.size();
        for (int j = 0; j < monthMapKeysSize; j++){
            System.out.println("j : " + j);
            cal.add(Calendar.MONTH, j);

            // IniDetail 시작일 설정
            // 첫 달이라면
            IniDetail iniDetail = new IniDetail();
            if (j == 0){
                iniDetail.setIniDetailStartDate(startDate);
            // 그 외
            } else {
                int firstDayInMonth = cal.getActualMinimum(Calendar.DAY_OF_MONTH);
                cal.set(Calendar.DAY_OF_MONTH, firstDayInMonth);
                iniDetail.setIniDetailStartDate(cal.getTime());
            }

            System.out.println(iniDetail);

            //캘린더 초기화
            cal.setTime(startDate);
            cal.add(Calendar.MONTH, j);
            // IniDetail 종료일 설정
            // 1개월 이하거나 마지막 달이라면
            if ((monthMapKeysSize == 1) || (j == monthMapKeysSize - 1)) {
                iniDetail.setIniDetailEndDate(endDate);
            // 그 외
            } else {
                int lastDayInMonth = cal.getActualMaximum(Calendar.DAY_OF_MONTH);
                cal.set(Calendar.DAY_OF_MONTH, lastDayInMonth);
                iniDetail.setIniDetailEndDate(cal.getTime());
            }
            iniDetails.add(iniDetail);
            cal.setTime(startDate);

            System.out.println(iniDetail);

            int monthMapKey = monthMapKeys.get(j);
            int possibleCount = monthMap.get(monthMapKey).size();
            if(j == monthMapKeysSize - 1){
                iniDetail.setIniDetailPossibleCount(possibleCount - 1);
                System.out.println("monthMap.get(monthMapKey).size() - 1 : " + possibleCount);
            } else if (j==0){
                iniDetail.setIniDetailPossibleCount(possibleCount - 1);
            } else {
                iniDetail.setIniDetailPossibleCount(possibleCount);
            }
            iniDetails.add(iniDetail);
        }



        return iniDetails;
    }

    @Override
    public List<IniDetail> getDayOfMonth(List<IniDetail> iniDetails, Map<String, Object> params){
        List<Date> possibleDateList = (List<Date>) params.get("possibleDateList");
        int possibleCount = 0;
        Calendar cal = Calendar.getInstance();

        for (IniDetail iniDetail : iniDetails) {
            Date iniDtlStartDate = iniDetail.getIniDetailStartDate();
            cal.setTime(iniDtlStartDate);
            int year = cal.get(Calendar.YEAR);
            int month = cal.get(Calendar.MONTH);
            System.out.println("year : " + year);
            System.out.println("month : " + month);
            System.out.println("====================");
            for (Date possibleDate : possibleDateList) {
                cal.setTime(possibleDate);
                int possibleYear = cal.get(Calendar.YEAR);
                int possibleMonth = cal.get(Calendar.MONTH);
                System.out.println("possibleYear : " + possibleYear);
                System.out.println("possibleMonth : " + possibleMonth);
                System.out.println("====================");

            }
        }

        return null;
    }

    // 입력된 iniDetails의 iniDetailCode 리스트를 반환하는 메소드
    @Override
    public List<Integer> selectIniDtlCodes(Map<String, Object> params) throws ParseException{
        return iniDetailMapper.selectIniDtlCodes(params);
    }



}
