package com.ideal.idealworldcupitem.persistent;

import javax.transaction.Transactional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.test.context.junit4.SpringRunner;

import com.ideal.demo.IdealWorldCupApplication;
import com.ideal.idealworldcupitem.persistent.IdealWorldCupItemRepository;

import lombok.extern.java.Log;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = IdealWorldCupApplication.class)
@Transactional
@Commit
@Log
public class IdealWorldCupItemRepositoryTest {
	@Autowired
	private IdealWorldCupItemRepository idealWorldCupItemRepo;
	
	@Test
	public void init() {
		
	}
}
