
export class User{

    public firstName:string;
    public lastName: string;
    public email:string;
    public password:string;
    public phone:string;
    public city:string;
    public gender:string;

    constructor(firstName:string,lastName:string,email:string,password:string,phone:string,city:string,gender:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email=email;
        this.password=password;
        this.phone=phone;
        this.city=city;
        this.gender=gender;
    }
}