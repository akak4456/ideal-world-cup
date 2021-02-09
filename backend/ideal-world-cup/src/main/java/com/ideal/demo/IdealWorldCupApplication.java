package com.ideal.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableAspectJAutoProxy(proxyTargetClass = true)
@SpringBootApplication(scanBasePackages = {"com.ideal"})
@EntityScan("com.ideal.*.domain")
@EnableJpaRepositories("com.ideal.*.persistent")
public class IdealWorldCupApplication {

	public static void main(String[] args) {
		SpringApplication.run(IdealWorldCupApplication.class, args);
	}

}
