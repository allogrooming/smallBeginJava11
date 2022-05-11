package com.project.smallbeginjava11.serviceImpl;


import com.project.smallbeginjava11.DTO.Calendar;
import com.project.smallbeginjava11.DTO.DateList;
import com.project.smallbeginjava11.DTO.MonthList;
import com.project.smallbeginjava11.mapper.CalendarMapper;
import com.project.smallbeginjava11.DTO.Todo;
import com.project.smallbeginjava11.service.CalendarService;
import com.project.smallbeginjava11.service.DateListService;
import com.project.smallbeginjava11.service.MonthListService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CalendarServiceImpl implements CalendarService {

    private final CalendarMapper calendarMapper;
    private final DateListService dateListService;
    private final MonthListService monthListService;

    @Override
    public List<Todo> getTodoList(String selectedDate){
        return calendarMapper.getTodoList(selectedDate);
    }

    @Override
    public List<Calendar> getIniAndObList(int memberCode){
        List<Calendar> calendarList = calendarMapper.selectIniAndObList(memberCode);

        for(Calendar calendar : calendarList){
            int iniPeriod = calendar.getIniPeriod();
            if(iniPeriod == 1){
                DateList dateList = dateListService.selectDateList(calendar.getDateListCode());
                calendar.setDateList(dateList);
            } else if (iniPeriod == 2){
                List<String> monthList = monthListService.selectMonthList(calendar.getMonthListCode());
                calendar.setPlannedDateList(monthList);
            }
        }
        return calendarList;
    }
}
