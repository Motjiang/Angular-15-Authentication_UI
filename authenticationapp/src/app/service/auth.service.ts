import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {

   }

   apiurl = 'http://localhost:3000/user';
   api_roleApi = 'http://localhost:3000/role';

   GetAllUsers(){
     return this.http.get(this.apiurl);
   }

   GetAllRoles(){
      return this.http.get(this.api_roleApi);
   }

   GetUserById(code:any){
     return this.http.get(this.apiurl+'/'+code);
   }

   RegisterUser(data:any){
     return this.http.post(this.apiurl,data);
   }

   updateuser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }

    IsloggedIn(){
      return sessionStorage.getItem('username') != null;
    }

    GetUserRole(){
      return sessionStorage.getItem('userrole') != null ? sessionStorage.getItem('userrole')?.toString() : '';
    }
}
