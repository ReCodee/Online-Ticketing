package com.ticketing.application.model;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "ticket")
public class Ticket {
  
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="user_id")
	private int userID;
	
	@Column(name="bus_id")
	private int busID;
	
	@Column(name = "vehicle_id")
	private int vehicleId;
	
	@Column(name="source")
	private String source;
	
	@Column(name="destination")
	private String destination;
	
	@Column(name="price")
	private int price;
	
	@Column(name="coupon")
	private String coupon;
	
	@Column(name="feedback")
	private String feedback;
	
	
	public String getCoupon() {
		return coupon;
	}

	public void setCoupon(String coupon) {
		this.coupon = coupon;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	@OneToMany(targetEntity=Passenger.class, cascade=CascadeType.ALL)
	@JoinColumn(name="pg_fk", referencedColumnName="id")
	private List<Passenger> passengers;
	
	public Ticket() {
		
	}
	
	

	public Ticket(int userID, int busID, int vehicleId, String source, String destination, int price, String coupon,
			String feedback, List<Passenger> passengers) {
		super();
		this.userID = userID;
		this.busID = busID;
		this.vehicleId = vehicleId;
		this.source = source;
		this.destination = destination;
		this.price = price;
		this.coupon = coupon;
		this.feedback = feedback;
		this.passengers = passengers;
	}

	public int getId() {
		return id;
	}

	public int getVehicleId() {
		return vehicleId;
	}

	public void setVehicleId(int vehicleId) {
		this.vehicleId = vehicleId;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public int getPrice() {
		return price;
	}

	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public int getBusID() {
		return busID;
	}

	public void setBusID(int busID) {
		this.busID = busID;
	}

	public List<Passenger> getPassengers() {
		return passengers;
	}

	public void setPassengers(List<Passenger> passengers) {
		this.passengers = passengers;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	
	
	
	
}
