package com.ideal.idealworldcup.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import com.ideal.member.domain.MemberEntity;

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
	private Long ino;//이상형 월드컵 번호
	
	private String title;//이상형 월드컵 제목
	
	private String detail;//이상형 월드컵 설명
	
	@ManyToOne
	@JoinColumn(name="email")
	private MemberEntity member;
}
