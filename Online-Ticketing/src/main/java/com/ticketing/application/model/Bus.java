package com.ticketing.application.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bus")
public class Bus {
    
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int vehicleId;
	
	@Column(name = "udt")
	private String UDT;
	
	@Column(name="type")
	private String type;
	
	@Column(name="fromPlace")
	private String from;
	
	@Column(name="toPlace")
	private String to;
	
	@Column(name="travel_time")
	private String travelTime;
	
	@Column(name="seats")
	private String seats;
	
	@Column(name="number_plate")
	private String numberPlate;

	
	
	public Bus(String uDT, String type, String from, String to, String travelTime, String seats, String numberPlate) {
		super();
		UDT = uDT;
		this.type = type;
		this.from = from;
		this.to = to;
		this.travelTime = travelTime;
		this.seats = seats;
		this.numberPlate = numberPlate;
	}

	public Bus() {
		
	}

	public int getVehicleId() {
		return vehicleId;
	}

	public String getUDT() {
		return UDT;
	}

	public void setUDT(String uDT) {
		UDT = uDT;
	}

	
	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public String getTravelTime() {
		return travelTime;
	}

	public void setTravelTime(String travelTime) {
		this.travelTime = travelTime;
	}

	public String getSeats() {
		return seats;
	}

	public void setSeats(String seats) {
		this.seats = seats;
	}

	public String getNumberPlate() {
		return numberPlate;
	}

	public void setNumberPlate(String numberPlate) {
		this.numberPlate = numberPlate;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	
	
	
	
}
