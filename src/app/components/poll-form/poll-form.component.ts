import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PollOption} from "src/app/models/poll-option"
import {PollService} from "src/app/services/poll.service";
import {Poll} from "../../models/poll";

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit{
  polls: Observable<Poll[]> = new Observable<Poll[]>();
  selectedOption: PollOption;

  testOptions: PollOption[] = [
    {id: "1", text: "option1", voteCount: 5},
    {id: "2", text: "option2", voteCount: 10},
    {id: "3", text: "option3", voteCount: 15},
    {id: "4", text: "option4", voteCount: 20},
  ]

  constructor(private pollService: PollService) {
    this.selectedOption = {id: "no id",text: "not selected", voteCount: 0};

  }

  ngOnInit() {
    this.polls = this.pollService.getPolls();
    console.log(this.polls);
  }

}
