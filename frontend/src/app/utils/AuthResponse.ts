import {User} from '../auth/user';

export class AuthResponse{

    public result:boolean;
    public user:User;
    public message:string;
    

    constructor(result:boolean, user:User, message:string){
        this.result = result;
        this.user = user;
        this.message=message;
    }
}