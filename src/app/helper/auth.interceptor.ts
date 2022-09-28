import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private authService: AuthService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const token = localStorage.getItem(this.authService.tokenName);

        if(token){
            let reqClone = req.clone({
                headers: req.headers.set("Authorization", `Bearer ${token}`)
            })
            return next.handle(reqClone);
        }else{
            return next.handle(req);
        }
    }

}