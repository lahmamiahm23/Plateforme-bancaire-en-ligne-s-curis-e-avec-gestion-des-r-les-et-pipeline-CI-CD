package com.bank;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BankingManagementSystem1Application {

	public static void main(String[] args) {
		SpringApplication.run(BankingManagementSystem1Application.class, args);
	}

	/**
	 * Bean ModelMapper statique pour éviter les erreurs de proxy
	 */
	@Bean
	public static ModelMapper modelMapper() {
		System.out.println("ModelMapper bean creation");

		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration()
				.setMatchingStrategy(MatchingStrategies.LOOSE)       // correspondance souple
				.setPropertyCondition(Conditions.isNotNull());       // ne map que les propriétés non nulles

		return modelMapper;
	}

}
