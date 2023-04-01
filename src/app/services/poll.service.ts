import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Poll} from "../models/poll";
import {Vote} from "../models/vote";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PollService implements OnInit {
  constructor(private http: HttpClient, private firestore: AngularFirestore) {
  }

  ngOnInit() {

  }

  createPoll(poll: Poll) {
    return this.firestore.collection('polls').add(poll);
  }

  getPolls() {
    return this.firestore.collection<Poll>('polls').valueChanges().pipe(tap(polls => {
      console.log('Polls: ', polls)
    }));
  }

  getPoll(id: string) {
    return this.firestore.collection('polls').doc<Poll>(id).valueChanges();
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
