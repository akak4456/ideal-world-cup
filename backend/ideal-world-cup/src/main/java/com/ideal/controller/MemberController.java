package com.ideal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ideal.service.MemberService;

@RestController
public class MemberController {
	@Autowired
	private MemberService memberService;
	
	@GetMapping("/member")
	public void addMember() {
		memberService.addMember();
	}
}
