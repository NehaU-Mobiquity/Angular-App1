import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private apiService:ApiService) { 
  }
  username: string = 'test user';
  cartCount: number = 0
  ngOnInit(): void {
    this.authService.getUsername().subscribe((data)=>{
      this.username = data;
    })
  }
 
  logout() {
    this.authService.logoutUser();
    this.router.navigate(['']);}


}
