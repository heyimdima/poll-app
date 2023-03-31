import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {Poll} from "../../models/poll";
import {PollService} from "../../services/poll.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  polls$: Observable<Poll[]> = new Observable<Poll[]>();
  hasVoted$: Observable<boolean> = new Observable<boolean>();

  constructor(public pollService: PollService, public userService: UserService) {
  }

  ngOnInit() {
    this.polls$ = this.pollService.getPolls();
    this.hasVoted$ = this.pollService.getVotes("1").pipe(
      map(votes => {
        const hasVoted = votes.some(vote => vote.user === this.userService.userId)
        console.log('Has Voted', hasVoted)
        return hasVoted
      })
    );

  }

}
