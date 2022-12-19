package com.ticketing.application;
import org.springframework.beans.factory.annotation.Autowired;

import com.ticketing.application.model.*;
import com.ticketing.application.repository.UserRepository;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OnlineTicketingApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(OnlineTicketingApplication.class, args);
	}

}
