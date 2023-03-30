import {Component, Input, OnInit} from '@angular/core';
import {PollOption} from "src/app/models/poll-option"
import {Poll} from "../../models/poll";
import {FormControl} from "@angular/forms";
import {PollService} from "../../services/poll.service";

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent {
  @Input()
  poll!: Poll;
  selectedOption = new FormControl();

  constructor(private pollService: PollService) {
  }

  onSubmit() {
    console.log('Selected option:', this.selectedOption.value);
    this.pollService.submitVote({
      user: "testUser2",
      pollId: this.poll.id,
      optionId: this.selectedOption.value.id
    })
  }

}
