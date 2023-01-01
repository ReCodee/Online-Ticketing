package com.ticketing.application.model;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "passenger")
public class Passenger {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="passenger_id")
	private int passengerID;
	
	public int getPassengerID() {
		return passengerID;
	}

	public void setPassengerID(int passengerID) {
		this.passengerID = passengerID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getSeatID() {
		return seatID;
	}

	public void setSeatID(String seatID) {
		this.seatID = seatID;
	}

	@Column(name="name")
	private String name;
	
	@Column(name="age")
	private String age;
	
	@Column(name="gender")
	private String gender;
	
	@Column(name="seat_id")
	private String seatID;
	
}
