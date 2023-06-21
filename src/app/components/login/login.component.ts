import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private formBuider:FormBuilder, private authSerivce:AuthService, private toastrService:ToastrService) {}
  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm = this.formBuider.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  login(){
    if(this.loginForm.valid){
        console.log(this.loginForm.value);
        let loginModel = Object.assign({}, this.loginForm.value)
        
        this.authSerivce.login(loginModel).subscribe(response=>{
          this.toastrService.info(response.message)
          localStorage.setItem("token",response.data.token)
          console.log(response)
        },responseError=>{
          console.log(responseError)
          this.toastrService.error(responseError.error)
        })
    }
  }
}
