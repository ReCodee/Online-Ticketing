import { Passengers } from "../travellers/travellers.model";

export class booking_confirmation{
    public bookingID :number;
	public userID : number; //sai
	public busID : number; //kartik
	public scheduledJourneyID : number; //kartik
    public passengers : Passengers[];

    constructor(bookingID:number,userID:number,busID:number,scheduledJourneyID:number , passengers : Passengers[]){
        this.bookingID = bookingID;
        this.userID = userID;
        this.busID = busID;
        this.scheduledJourneyID = scheduledJourneyID;
        this.passengers = passengers;
    }
}