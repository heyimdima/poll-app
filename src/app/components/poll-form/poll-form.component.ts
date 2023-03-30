import {Component, OnInit} from '@angular/core';
import { map, Observable } from 'rxjs';
import {PollOption} from "src/app/models/poll-option"
import {PollService} from "src/app/services/poll.service";
import {Poll} from "../../models/poll";

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit{
  pollQuestion$: Observable<string> = new Observable<string>();
  pollOptions$: Observable<PollOption[]> = new Observable<PollOption[]>();
  selectedOption: PollOption;

  constructor(private pollService: PollService) {
    this.selectedOption = {id: "no id",text: "not selected", voteCount: 0};
  }

  ngOnInit() {
    this.pollOptions$ = this.pollService.getPolls().pipe(map(poll => {
      return poll?.options
    }));
    this.pollQuestion$ = this.pollService.getPolls().pipe(map(poll => poll?.question));
  }

}
