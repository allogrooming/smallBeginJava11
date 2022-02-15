package com.project.smallbeginjava11.serviceImpl;

import com.project.smallbeginjava11.DTO.Category;
import com.project.smallbeginjava11.mapper.DateListMapper;
import com.project.smallbeginjava11.service.DateListService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class DateListServiceImpl implements DateListService {
    private final DateListMapper dateListMapper;

    @Override
    public void updateDateList(Map<String, String> map){
        dateListMapper.insertDateList(map);
    }

}