package com.project.smallbeginjava11.serviceImpl;

import com.project.smallbeginjava11.DTO.IniDetail;
import com.project.smallbeginjava11.DTO.Initiative;
import com.project.smallbeginjava11.DTO.PossibleDate;
import com.project.smallbeginjava11.DTO.PossibleDateList;
import com.project.smallbeginjava11.mapper.IniMapper;
import com.project.smallbeginjava11.mapper.PossibleDateMapper;
import com.project.smallbeginjava11.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.*;

@Service
@RequiredArgsConstructor
public class PossibleDateServiceImpl implements PossibleDateService{

    private final PossibleDateMapper possibleDateMapper;

    @Override
    public void insertPossibleDateList(Map<String, Object> params) throws ParseException {
        possibleDateMapper.insertPossibleDateList(params);
    }

    @Override
    public void insertPossibleDate(Map<String, Object> params) throws ParseException {
        possibleDateMapper.insertPossibleDate(params);
    }

    @Override
    public List<PossibleDate> fromDateListToPossibleDateList(Initiative initiative) throws ParseException {
        List<IniDetail> iniDetails = initiative.getIniDetails();
        List<Integer> days = initiative.getDateList();
        List<PossibleDate> possibleDateList = new PossibleDateList().getPossibleDateList();
        Calendar cal = Calendar.getInstance();

        Collections.sort(days);
        for (IniDetail iniDetail : iniDetails) {
            Date iniDtlStartDate = iniDetail.getIniDetailStartDate();
            Date iniDtlEndDate = iniDetail.getIniDetailEndDate();
            cal.setTime(iniDtlStartDate);
            for (int i = 0; i < 7; i++) {
                cal.add(Calendar.DATE, i);
                int detailDayOfWeek = cal.get(Calendar.DAY_OF_WEEK);
                for (int day : days) {
                    if (detailDayOfWeek == day) {
                        PossibleDate possibleDate = new PossibleDate();
                        Date date = cal.getTime();
                        possibleDate.setPsbDt(date);
                        possibleDateList.add(possibleDate);
                    }
                }
                if (cal.getTime() == iniDtlEndDate) break;
                cal.setTime(iniDtlStartDate);
            }
        }
        return possibleDateList;
    }
}
