import { Passengers } from "../confirmation/travellers/travellers.model";
import { passenger } from "../Models/passenger.model";

export class bookings {

    id: number;

    age: number;
    
    name: string;
    
    source: string;

    destination: string;

    date_of_travel: string;

    passengers: passenger[];
    
    
    }