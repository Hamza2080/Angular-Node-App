import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpRequestService } from "./service/http-request.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  userId: any;
  access_token: any;

  constructor(private router: Router, private httpService: HttpRequestService) {
    if (localStorage.getItem("user")) {
      this.userId = JSON.parse(localStorage.getItem("user")).userId;
      this.access_token = JSON.parse(localStorage.getItem("user")).id;
    } else {
      localStorage.clear();
      this.router.navigate(["/login"]);
    }
  }

  ngOnInit() {
    if (this.userId && this.access_token) {
      this.httpService.getUserById(this.userId, this.access_token).subscribe(
        user => {
          console.log("validated");
          this.router.navigate(["/" + this.router.url]);
        },
        err => {
          localStorage.clear();
          this.router.navigate(["/login"]);
        }
      );
    }
  }
}
