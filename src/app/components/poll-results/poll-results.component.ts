import { Component } from '@angular/core';
import {Option} from "../../../../../poll-app-v2/src/app/models/option";
import {PollService} from "../../../../../poll-app-v2/src/app/poll.service";

@Component({
  selector: 'app-poll-results',
  templateUrl: './poll-results.component.html',
  styleUrls: ['./poll-results.component.css']
})
export class PollResultsComponent {
  selectedOption: any;
  options: Option[] = [
    { content: "Sushi", percentage: 75 },
    { content: "Nuggets", percentage: 15 },
    { content: "Tacos", percentage: 30 },
    { content: "Lasagna", percentage: 80 }
  ];

  constructor(private pollService: PollService) {

  }

  ngOnInit() {
    // console.log(this.pollService.getResults())
  }
}
