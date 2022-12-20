export class User{

    public username:string;
    public email:string;
    public password:string;
    public phone:string;
    public city:string;
    public gender:string;

    constructor(name:string,email:string,password:string,phone:string,city:string,gender:string){
        this.username = name;
        this.email=email;
        this.password=password;
        this.phone=phone;
        this.city=city;
        this.gender=gender;
    }
}