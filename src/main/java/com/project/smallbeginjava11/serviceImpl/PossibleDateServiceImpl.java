package com.project.smallbeginjava11.serviceImpl;

import com.project.smallbeginjava11.DTO.Initiative;
import com.project.smallbeginjava11.mapper.IniMapper;
import com.project.smallbeginjava11.mapper.PossibleDateMapper;
import com.project.smallbeginjava11.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class PossibleDateServiceImpl implements PossibleDateService{

    private final PossibleDateMapper possibleDateMapper;

    @Override
    public void insertPossibleDataList(Map<String, Object> params) throws ParseException {
        possibleDateMapper.insertPossibleDataList(params);
    }
}
