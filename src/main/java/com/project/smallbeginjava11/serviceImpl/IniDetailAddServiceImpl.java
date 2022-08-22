package com.project.smallbeginjava11.serviceImpl;

import com.project.smallbeginjava11.DTO.IniDetail;
import com.project.smallbeginjava11.DTO.IniDetailAdd;
import com.project.smallbeginjava11.DTO.Initiative;
import com.project.smallbeginjava11.DTO.PossibleDate;
import com.project.smallbeginjava11.mapper.IniDetailAddMapper;
import com.project.smallbeginjava11.service.IniDetailAddService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.*;

@Service
@RequiredArgsConstructor
public class IniDetailAddServiceImpl implements IniDetailAddService {

    private final IniDetailAddMapper iniDetailAddMapper;

    @Override
    public void insertIniDetailAdd(Map<String, Object> map) throws ParseException {
        iniDetailAddMapper.insertIniDetailAdd(map);
    }

    @Override
    public List<Integer> calculateDaysInclude(Initiative initiative, List<Integer> iniDtlCodeList) throws ParseException {
        List<IniDetail> iniDetails = initiative.getIniDetails();
        List<Integer> iniDtlPsbList = new ArrayList<Integer>();
        List<Integer> iniDtlAddList = new ArrayList<Integer>();

        for (IniDetail iniDetail : iniDetails) {
            iniDtlPsbList.add(iniDetail.getIniDetailPossibleCount());
        }

        Collections.sort(iniDtlAddList);
        for (int i = 0; i < iniDtlPsbList.size(); i++) {
            int iniDtlPsbCount = iniDtlPsbList.get(i);
            for (int j = 0; j < iniDtlPsbCount; j++) {
                iniDtlAddList.add(iniDtlCodeList.get(i));
            }
        }
        return iniDtlAddList;
    }


    // 주 단위일 경우 활용하는 메소드
    @Override
    public List<IniDetailAdd> combineIniDtlCodeAndPossibleDate(Map<String, Object> params) throws ParseException {
        List<Integer> iniDtlCountList = (List<Integer>) params.get("iniDtlCountList");
        List<PossibleDate> possibleDateList = (List<PossibleDate>) params.get("possibleDateList");
        List<IniDetailAdd> iniDtlAddList = new ArrayList<IniDetailAdd>();

        Collections.sort(iniDtlCountList);
        Collections.sort(possibleDateList);
        for (int i = 0; i < iniDtlCountList.size(); i++) {
            IniDetailAdd iniDetailAdd = new IniDetailAdd();
            iniDetailAdd.setIniDetailCode(iniDtlCountList.get(i));
            iniDetailAdd.setIniDetailAddPlanDate(possibleDateList.get(i).getPsbDt());
            iniDtlAddList.add(iniDetailAdd);
        }
        return iniDtlAddList;
    }

    // 월 단위일 경우 사용하는 메소드
    @Override
    public List<IniDetailAdd> combineIniDtlCodeAndIniDtlAdd(Map<String, Object> params) throws ParseException {
        List<IniDetail> iniDetails = (List<IniDetail>) params.get("iniDetails");
        List<Integer> iniDtlCodeList = (List<Integer>) params.get("iniDtlCodeList");
        List<PossibleDate> possibleDateList = (List<PossibleDate>) params.get("possibleDateList");
        List<IniDetailAdd> iniDtlAddList = new ArrayList<IniDetailAdd>();
        Calendar cal = Calendar.getInstance();

        for (IniDetail iniDetail : iniDetails) {
            Date iniDtlStartDate = iniDetail.getIniDetailStartDate();
            cal.setTime(iniDtlStartDate);
            int year = cal.get(Calendar.YEAR);
            int month = cal.get(Calendar.MONTH);
            System.out.println("year : " + year);
            System.out.println("month : " + month);
            System.out.println("====================");

            // TODO : commit, push 를 위한 임시 주석처리
//            for (Date possibleDate : possibleDateList) {
//                cal.setTime(possibleDate);
//                int possibleYear = cal.get(Calendar.YEAR);
//                int possibleMonth = cal.get(Calendar.MONTH);
//                System.out.println("possibleYear : " + possibleYear);
//                System.out.println("possibleMonth : " + possibleMonth);
//                System.out.println("====================");
//
//            }
        }

        return iniDtlAddList;
    }


}