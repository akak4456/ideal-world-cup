package com.ideal.vo;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class IdealWorldCupMakerFileVO {
	private String imageDetail;
	
	private MultipartFile file;
}
