package com.ideal.idealworldcup.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Getter
@SuperBuilder
@NoArgsConstructor
@Entity
@SequenceGenerator(name="i_seq", initialValue=1, allocationSize=1)
@EqualsAndHashCode(of="ino")
public class IdealWorldCup {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO,generator="i_seq")
	private Long ino;
	
	private String title;//이상형 월드컵 제목
	
	private String thumbnailSrc1;//이상형 월드컵 썸네일 1
	
	private String thumbnailDescription1;//이상형 월드컵 썸네일 설명 1
	
	private String thumbnailSrc2;//이상형 월드컵 썸네일 2
	
	private String thumbnailDescription2;//이상형 월드컵 썸네일 설명 1
}
