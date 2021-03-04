package com.ideal.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IdealWorldCupController {
	@PostMapping("/idealworldcup")
	public ResponseEntity<String> makeNewIdealWorldCup(){
		return new ResponseEntity<String>("success",HttpStatus.OK);
	}
}
