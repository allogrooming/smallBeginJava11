package com.project.smallbeginjava11.serviceImpl;

import com.project.smallbeginjava11.DTO.Category;
import com.project.smallbeginjava11.DTO.Temp;
import com.project.smallbeginjava11.mapper.TempMapper;
import com.project.smallbeginjava11.service.TempService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TempServiceImpl implements TempService {

    private final TempMapper tempMapper;

    @Override
    public List<Temp> getTemp(){
        return tempMapper.getTemp();
    }

}