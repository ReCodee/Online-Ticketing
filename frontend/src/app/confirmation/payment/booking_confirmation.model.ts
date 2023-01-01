import { Passengers } from "../travellers/travellers.model";
import { Injectable } from '@angular/core';


export class Ticket{
    public id :number;
    public vehicleId:number;
	public userID : number; //sai
	public busID : number; //kartik
	public scheduledJourneyID : number; //kartik
    public source : string;
    public destination : string;
    public passengers : Passengers[];
    public coupon: string;
    public feedback: string;
    public price:number;

    constructor(id:number, price:number, vehicleId:number, source: string, destination: string, userID:number,busID:number, passengers : Passengers[]){
        this.id = id;
        this.vehicleId = vehicleId;
        this.userID = userID;
        this.busID = busID;
        this.passengers = passengers;
        this.source = source;
        this.destination = destination;
        this.price = price;
    }
}