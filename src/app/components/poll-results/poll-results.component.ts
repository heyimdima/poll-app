import {Component, Input} from '@angular/core';
import {Poll} from "../../models/poll";

@Component({
  selector: 'app-poll-results',
  templateUrl: './poll-results.component.html',
  styleUrls: ['./poll-results.component.css']
})
export class PollResultsComponent {
  @Input()
  poll!: Poll
  constructor() {}

  getTotalVotes(): number {
    let totalVotes: number = 0;
    this.poll.options.forEach(option => {
      totalVotes += option.voteCount;
    })

    return totalVotes;
  }

  ngOnInit() {
    console.log(this.getTotalVotes());
  }
}
