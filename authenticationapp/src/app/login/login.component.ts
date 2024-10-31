import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {
    sessionStorage.clear();
  }
  //user variable
  userdata: any;

  loginForm = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  proceedlogin() {
    if (this.loginForm.valid) {
      this.service
        .GetUserById(this.loginForm.value.username)
        .subscribe((res) => {
          this.userdata = res;
          if (this.userdata.password == this.loginForm.value.password) {
            if(this.userdata.isactive){
              sessionStorage.setItem('username', this.userdata.id);
              sessionStorage.setItem('userrole', this.userdata.role);
            this.router.navigate(['']);
            }else{
              this.toastr.error('Wait for the administrator to enable Access.','In Active User');
            }            
          } else {
            this.toastr.error('Invalid Credentials');
          }
        });
    }
  }
}
