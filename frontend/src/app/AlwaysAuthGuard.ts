import { CanActivate } from "@angular/router";
import { HttpRequestService } from "./service/http-request.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AlwaysAuthGuard implements CanActivate {
  userId: any;
  access_token: any;

  constructor(private httpService: HttpRequestService) {
    this.userId = JSON.parse(localStorage.getItem("user")).userId;
    this.access_token = JSON.parse(localStorage.getItem("user")).id;
  }

  canActivate() {
    let userId = JSON.parse(localStorage.getItem("user")).userId;
    let access_token = JSON.parse(localStorage.getItem("user")).id;

    if (userId && access_token) { return true;
    //   this.httpService.getUserById(this.userId, this.access_token).subscribe(
    //     data => {
    //         console.log("hamza")
    //       return true;
    //     },
    //     error => {
    //         console.log("asdasd")

    //       return false;
    //     }
    //   );
    } else return false;
  }
}
