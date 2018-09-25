import { Component, OnInit } from "@angular/core";
import { HttpRequestService } from "../service/http-request.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"]
})
export class AdminDashboardComponent implements OnInit {
  access_token: any;
  usersArr: any;
  userId: any;

  constructor(
    private httpService: HttpRequestService,
    private router: Router) {
    this.userId = JSON.parse(localStorage.getItem("user")).userId;
    this.access_token = JSON.parse(localStorage.getItem("user")).id;
  }

  ngOnInit() {
    this.httpService.getAllUsers(this.access_token).subscribe(
      data => {
        this.usersArr = data;
        if (this.usersArr.user[0].id == this.userId)
          this.usersArr.user.splice(0, 1);
      },
      error => console.error(error)
    );
  }

  //logout function
  logout() {
    this.httpService.logout(this.access_token).subscribe(res => {
      localStorage.clear();
      this.router.navigate(["/login"]);
    });
  }
}
