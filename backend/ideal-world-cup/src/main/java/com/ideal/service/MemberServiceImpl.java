package com.ideal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ideal.member.domain.MemberEntity;
import com.ideal.member.persistent.MemberEntityRepository;

@Service
public class MemberServiceImpl implements MemberService {
	@Autowired
	private MemberEntityRepository memberRepo;
	
	@Override
	public void addMember() {
		MemberEntity member = MemberEntity.builder().email("akak4456@naver.com").password("1234").build();
		memberRepo.save(member);
	}

}
