package com.ticketing.application.controller.cto;

import com.ticketing.application.model.Ticket;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OrderRequest {
   
	private Ticket ticket;

	public Ticket getTicket() {
		return ticket;
	}

	public void setTicket(Ticket ticket) {
		this.ticket = ticket;
	}
	
}
