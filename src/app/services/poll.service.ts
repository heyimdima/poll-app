import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Poll} from "../models/poll";
import {PollOption} from "../models/poll-option";
import {Vote} from "../models/vote";
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  // public getIpAddress() {
  //   this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
  //     console.log(res.ip);
  //   });
  // }

  createPoll(poll: Poll) {
    return this.firestore.collection('polls').add(poll);
  }

  getPolls() {
    return this.firestore.collection<Poll>('polls').valueChanges();
  }

  getPoll(id: string) {
    return this.firestore.collection('polls').doc<Poll>(id).valueChanges();
  }

  updatePollOption(pollId: string, option: PollOption) {
    return this.firestore
      .collection('polls')
      .doc(pollId)
      .collection('options')
      .doc(option.id)
      .update(option);
  }

  submitVote(vote: Vote) {
    return this.firestore.collection('votes').add(vote);
  }

  getVotes(pollId: string) {
    return this.firestore
      .collection<Vote>('votes', (ref) => ref.where('pollId', '==', pollId))
      .valueChanges();
  }

}
