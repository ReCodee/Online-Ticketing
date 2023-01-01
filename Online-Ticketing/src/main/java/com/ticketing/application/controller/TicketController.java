package com.ticketing.application.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ticketing.application.controller.cto.OrderRequest;
import com.ticketing.application.exception.ResourceNotFoundException;
import com.ticketing.application.model.*;
import com.ticketing.application.repository.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/")
public class TicketController {

    @Autowired
    private TicketRepository ticketRepository;

    @GetMapping("tickets")
    public List < Ticket > getTickets() {
        return this.ticketRepository.findAll();
    }
    
    @GetMapping("/tickets/{id}")
	public ResponseEntity<List<Ticket>> getTicketByUserId(@PathVariable(value = "id") Integer ticketId)
			throws ResourceNotFoundException {
		List<Ticket> tickets = ticketRepository.findByUserID(ticketId);
		return ResponseEntity.ok().body(tickets);
	}
    
    @GetMapping("/ticket/{id}")
	public ResponseEntity<Ticket> getTicketById(@PathVariable(value = "id") Integer ticketId)
			throws ResourceNotFoundException {
		Ticket ticket = ticketRepository.findById(ticketId).orElseThrow(() -> new ResourceNotFoundException("Ticket Not Found"));
				return ResponseEntity.ok().body(ticket);
	}
    
    @PostMapping("/tickets")
	public Ticket createTicket(@Valid @RequestBody Ticket ticket) {
    	System.out.println(ticket.getSource());
    	System.out.println(ticket.getDestination());
		return ticketRepository.save(ticket);
	}
    
    @PutMapping("/tickets/{id}")
	public ResponseEntity<Ticket> updateTicket(@PathVariable(value = "id") Integer ticketId,
			@Valid @RequestBody Ticket ticketDetails) throws ResourceNotFoundException {
    	System.out.println(ticketId);
		Ticket ticket = ticketRepository.findById(ticketId)
				.orElseThrow(() -> new ResourceNotFoundException("Ticket not found for this id :: " + ticketId));

		ticket.setFeedback(ticketDetails.getFeedback());
		//ticket.setName(ticketDetails.getName());
		final Ticket updatedTicket= ticketRepository.save(ticket);
		return ResponseEntity.ok(updatedTicket);
	}
    
    @DeleteMapping("/tickets/{id}")
	public Map<String, Boolean> deleteTicket(@PathVariable(value = "id") Integer ticketId)
			throws ResourceNotFoundException {
		Ticket ticket= ticketRepository.findById(ticketId)
				.orElseThrow(() -> new ResourceNotFoundException("Ticket not found for this id :: " + ticketId));

		ticketRepository.delete(ticket);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}