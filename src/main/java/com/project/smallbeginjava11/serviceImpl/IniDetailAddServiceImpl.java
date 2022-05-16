package com.project.smallbeginjava11.serviceImpl;

import com.project.smallbeginjava11.DTO.IniDetail;
import com.project.smallbeginjava11.DTO.Initiative;
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
    public void insertIniDetailAdd(List<Integer> list) throws ParseException {
        iniDetailAddMapper.insertIniDetailAdd(list);
    }

    @Override
    public List<Integer> calculateDaysInclude(Initiative initiative, List<Integer> list) throws ParseException {
        List<IniDetail> iniDetails = initiative.getIniDetails();
        List<Integer> iniDtlPsbList = new ArrayList<Integer>();
        List<Integer> iniDtlAddList = new ArrayList<Integer>();

        for (IniDetail iniDetail : iniDetails){
            iniDtlPsbList.add(iniDetail.getIniDetailPossibleCount());
        }

        Collections.sort(iniDtlAddList);
        for (int i = 0; i < iniDtlPsbList.size(); i++) {
            int iniDtlPsbCount = iniDtlPsbList.get(i);
            for (int j = 0; j < iniDtlPsbCount; j++) {
                iniDtlAddList.add(list.get(i));
            }
        }
        return iniDtlAddList;
    }

}
