package com.ideal.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ideal.vo.IdealWorldCupMakerFileVO;
import com.ideal.vo.IdealWorldCupMakerVO;

import lombok.extern.java.Log;

@RestController
@Log
public class IdealWorldCupController {
	@PostMapping("/idealworldcup")
	public ResponseEntity<String> makeNewIdealWorldCup(@RequestBody IdealWorldCupMakerVO makerVO){
		log.info(makerVO.getTitle());
		log.info(makerVO.getDetail());
		log.info(makerVO.getFiles().length+"");
		IdealWorldCupMakerFileVO fileVO = makerVO.getFiles()[0];
		log.info(fileVO.getImageDetail());
		log.info(fileVO.getFile()+"");
		return new ResponseEntity<String>("success",HttpStatus.OK);
	}
}
