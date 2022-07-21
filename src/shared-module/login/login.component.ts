import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, 
    private router: Router, 
    private activatedRoute:ActivatedRoute) { }
  invalidCredentialMsg: string='';
  retUrl:string="";
  loginForm: any;
  
  ngOnInit(): void {
    this.activatedRoute.queryParamMap
                .subscribe(params => {
            this.retUrl = JSON.parse(params.get('retUrl') || '{}');; 
            console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
        });
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$')]),
    });
  }
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');}
  
loginProcess(){
  this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(data => {
    if (this.loginForm.value.username === 'admin') {
         this.router.navigate( ['admin']);
    } else {
         this.router.navigate( ['user']);
    }
});
    }


}
