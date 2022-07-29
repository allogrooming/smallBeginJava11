package com.project.smallbeginjava11.serviceImpl;

import com.project.smallbeginjava11.mapper.JoinMapper;
import com.project.smallbeginjava11.service.JoinService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class JoinServiceImpl implements JoinService {

    private final JoinMapper joinMapper;

    @Override
    public void inputJoin(Map<String, String> param) throws ParseException {
        System.out.println("Service layer : " + param);
        joinMapper.insertMember(param);
    }
}
