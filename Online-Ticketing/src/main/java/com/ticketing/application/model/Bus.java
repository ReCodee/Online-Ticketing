package com.ticketing.application.model;

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

	public Bus(String uDT, String type) {
		super();
		UDT = uDT;
		this.type = type;
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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	
	
	
	
}
