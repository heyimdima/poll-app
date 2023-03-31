import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AngularFirestore, DocumentReference} from "@angular/fire/compat/firestore";
import {Poll} from "../models/poll";
import {Vote} from "../models/vote";
import {map, Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class PollService implements OnInit {
  private _showPoll: boolean = true;

  constructor(private http: HttpClient, private firestore: AngularFirestore, private userService: UserService) {
  }

  ngOnInit() {

  }

  get showPoll(): boolean {
    return this._showPoll;
  }

  set showPoll(value: boolean) {
    this._showPoll = value;
  }

  createPoll(poll: Poll) {
    return this.firestore.collection('polls').add(poll);
  }

  getPolls() {
    return this.firestore.collection<Poll>('polls').valueChanges();
  }

  hasUserVoted(pollId: string, userId: string): Observable<boolean> {
    return this.getVotes(pollId).pipe(
      map((votes: Vote[]) => {
        console.log(votes.some(vote => vote.user === userId));
        return votes.some(vote => vote.user === userId);
      })
    );
  }

  getPoll(id: string) {
    return this.firestore.collection('polls').doc<Poll>(id).valueChanges();
  }




  getVotes(pollId: string) {
    return this.firestore
      .collection<Vote>('votes', (ref) => ref.where('pollId', '==', pollId))
      .valueChanges();
  }

}
