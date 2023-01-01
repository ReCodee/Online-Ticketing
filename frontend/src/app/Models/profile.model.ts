export class Userprofile{
    public userId:number;
    public fullName:string;
    public firstName:string;
    public lastName:string;
    public email:string;
    public phone:string;
    public gender:string;
    public password:string;
    public city:string;
 
     constructor(userId:number, fullName:string,firstName:string, lastName:string, mail:string,phone:string,Gender:string,password:string,city:string){
         this.userId=userId;
         this.fullName = fullName;
         this.firstName=firstName;
         this.lastName=lastName;
          this.email=mail;
          this.phone=phone;
          this.gender=Gender;
          this.password=password;
          this.city=city;
 
     }
     
     
      
 }