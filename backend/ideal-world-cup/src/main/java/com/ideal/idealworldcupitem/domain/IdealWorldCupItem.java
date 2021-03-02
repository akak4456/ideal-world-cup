package com.ideal.idealworldcupitem.domain;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import com.ideal.idealworldcup.domain.IdealWorldCup;
import com.sun.istack.NotNull;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Getter
@SuperBuilder
@NoArgsConstructor
@Entity
@SequenceGenerator(name="i_seq", initialValue=1, allocationSize=1)
@EqualsAndHashCode(of="iino")
public class IdealWorldCupItem {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO,generator="i_seq")
	private Long iino;
	
	@Enumerated(EnumType.STRING)
	@NotNull
	private IdealWorldCupItemType type;//타입
	
	private String src;//주소
	
	private String name;//이름
	
	@ManyToOne
	@JoinColumn(name="ino")
	private IdealWorldCup idealWorldCup;
}
