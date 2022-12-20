import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../login.service";

@Injectable()
export class authGaurd implements CanActivate{

    constructor(private router: Router , private loginservice :LoginService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.loginservice.userid!=0) {

            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['']);
        return false;
    
}
}