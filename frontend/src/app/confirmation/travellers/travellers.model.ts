export class Passengers{
    public passengerID :number;
    public name: String;
    public age: String;
    public gender:String;
    public seatID:number; 
    
    constructor(passengerID:number,name:String,age:String,seatID:number,gender:String){
        this.passengerID = passengerID;
        this.name = name;
        this.gender = gender;
        this.seatID = seatID;
        this.age = age;
    }

}



