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
        joinMapper.insertMember(param);
    }

    @Override
    public int checkId(Map<String, String> memberId){
        int cnt = joinMapper.checkId(memberId);
        return cnt;
    }

    @Override
    public int checkNick(Map<String, String> nickname){
        int cnt = joinMapper.checkNick(nickname);
        return cnt;
    }
}
