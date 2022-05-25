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
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class IniDetailAddServiceImpl implements IniDetailAddService {

    private final IniDetailAddMapper iniDetailAddMapper;

    @Override
    public void insertIniDetailAdd(Map<String, Object> map) throws ParseException {
        iniDetailAddMapper.insertIniDetailAdd(map);
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

    @Override
    public List<IniDetailAdd> combineIniDtlCodeAndPossibleDate(Map<String, Object> params) throws ParseException {
        List<Integer> iniDtlCountList = (List<Integer>) params.get("iniDtlCountList");
        List<PossibleDate> possibleDateList = (List<PossibleDate>) params.get("possibleDateList");
        List<IniDetailAdd> iniDtlAddList = new ArrayList<IniDetailAdd>();

        Collections.sort(iniDtlCountList);
        Collections.sort(possibleDateList);
        for (int i = 0; i <iniDtlCountList.size(); i++){
            IniDetailAdd iniDetailAdd = new IniDetailAdd();
            iniDetailAdd.setIniDetailCode(iniDtlCountList.get(i));
            iniDetailAdd.setIniDetailAddPlanDate(possibleDateList.get(i).getPsbDt());
            iniDtlAddList.add(iniDetailAdd);
        }
        return iniDtlAddList;
    }


}
