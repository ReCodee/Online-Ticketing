package com.ticketing.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.ticketing.application.model.*;

@Repository
public interface PassengerRepository extends JpaRepository<Passenger, Integer> {

}
