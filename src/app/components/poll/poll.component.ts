import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Poll} from "../../models/poll";
import {PollService} from "../../services/poll.service";

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent {

  polls$: Observable<Poll[]> = new Observable<Poll[]>();

  constructor(private  pollService: PollService) {
    this.polls$ = this.pollService.getPolls();
  }

}
