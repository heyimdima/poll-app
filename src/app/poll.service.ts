import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PollService {
  items: Observable<any[]>
  constructor(private http: HttpClient, firestore: AngularFirestore) {
    this.items = firestore.collection('/polls/1/options').valueChanges();
  }

  public getIpAddress() {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      console.log(res.ip);
    });
  }

  public getOptions() {
    return this.items;
  }

}
