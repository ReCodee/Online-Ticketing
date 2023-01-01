package com.ticketing.application.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ticketing.application.model.*;

@Repository
public interface BusRepository extends JpaRepository<Bus, Integer>{

	List<Bus> findByFromAndTo(String from, String to);
	
}