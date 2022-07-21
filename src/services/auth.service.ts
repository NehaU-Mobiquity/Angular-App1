import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isloggedIn: boolean;
  private userName:string ='';
 
    constructor() {
        this.isloggedIn=false;
    }
    
    getUsername():Observable<string>{
      return of(this.userName);
    }

    login(username: string, password:string) {
 
        //Assuming users are provided the correct credentials.
        //In real app you will query the database to verify.
        this.isloggedIn=true;
        this.userName=username;
         return of(this.isloggedIn);
    }
 
    isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }
 
    isAdminUser():boolean {
        if (this.userName=='admin') {
            return true; 
        }
        return false;
    }
    
    logoutUser(): void{
        this.isloggedIn = false;
    }
 
}

