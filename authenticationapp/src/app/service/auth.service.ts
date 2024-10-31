import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {

   }

   apiurl = 'http://localhost:3000/user';

   GetAllUsers(){
     return this.http.get(this.apiurl);
   }

   GetUserById(code:any){
     return this.http.get(this.apiurl+'/'+code);
   }

   RegisterUser(data:any){
     return this.http.post(this.apiurl,data);
   }

    UpdateUser(code:any,data:any){
      return this.http.put(this.apiurl+'/'+code,data);
    }

    IsloggedIn(){
      return sessionStorage.getItem('username') != null;
    }

    GetUserRole(){
      return sessionStorage.getItem('userrole') != null ? sessionStorage.getItem('userrole')?.toString() : '';
    }
}
