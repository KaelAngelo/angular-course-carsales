import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RequestLogin } from '../models/RequestLogin';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  imports: [CardModule, InputTextModule, FormsModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {


  public requestLogin: RequestLogin = new RequestLogin();

  constructor(private loginService : LoginService) {}
  

  ngOnInit(): void {
   
  }

  public doLogin(): void{

    this.loginService.doLogin(this.requestLogin).subscribe(data =>{
      console.log(data);
    },
     error =>{
    console.error(error);
  })

  }

  

}
