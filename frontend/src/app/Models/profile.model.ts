export class Userprofile{
    public userId:number;
    public username:String;
    public email:String;
    public phone:String;
    public gender:String;
    public password:String;
    public city:String;
 
     constructor(userId:number,username:String,mail:String,phone:String,Gender:String,password:String,city:String){
         this.userId=userId;
         this.username=username;
          this.email=mail;
          this.phone=phone;
          this.gender=Gender;
          this.password=password;
          this.city=city;
 
     }
     
     
      
 }