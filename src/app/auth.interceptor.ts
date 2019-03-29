import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';
import{ Router } from '@angular/router';
// injectable => permet de dire a angular que c dans le service qu'on va injecter d'autres services

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
   
    constructor(private authService: AuthService, private router: Router){
 
    }
    intercept(req: HttpRequest<any>, next: HttpHandler){
            const token = this.authService.token || "";
            const request = req.clone({
                headers: req.headers.set('Authorization','Bearer '+token)
                
            })
            return next.handle(request).pipe(
                tap(sucess => {},
                  errorEvent => {
                    if(errorEvent instanceof HttpErrorResponse){
                        if(errorEvent.status === 401){
                            this.router.navigate(['/login'])
                        }
                    }
                  })  
            );
    }
}