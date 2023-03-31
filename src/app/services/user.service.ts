import {Injectable} from '@angular/core';
import {sha256} from 'js-sha256';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userId: string = "";

  constructor(private http: HttpClient) {
    this.initIpAddress();
  }

  private initIpAddress() {
    this.http.get('https://api.ipify.org?format=json').pipe(
      map((response: any) => {
        console.log('User IP address:', response.ip); // remove later
        this.generateUniqueId(response.ip);
      })
    ).subscribe();
  }

  private generateUniqueId(ip: string) {
    this._userId = sha256(ip);
    console.log('User ID:', this._userId); // remove later
  }

  get userId(): string {
    return this._userId;
  }
}
