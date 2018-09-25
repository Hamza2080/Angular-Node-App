import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { HttpRequestService } from "../service/http-request.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  private loginError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpRequestService,
    private router: Router
  ) {
    this.loginFormInitializer();
  }

  ngOnInit() {}

  /***
   @description: Initialize login Form
   **/
  loginFormInitializer() {
    this.loginForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ]
      ],
      password: ["", [Validators.required]]
    });
  }

  /*** 
   @description: submit function on login form
  **/
  submitLoginForm() {
    this.httpService.login(this.loginForm.value).subscribe(
      user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(["/user_profile"]);
      },
      err => {
        window.scroll(0, 0);
        this.loginError = true;
        setTimeout(() => {
          this.loginError = false;
        }, 3000);
      }
    );
  }
}
