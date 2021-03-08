package com.ideal.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class IdealWorldCupMakerVO {
	private String title;
	
	private String detail;
	
	private IdealWorldCupMakerFileVO[] files;
}
