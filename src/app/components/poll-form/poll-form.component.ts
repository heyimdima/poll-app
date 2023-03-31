import {Component, Input, OnChanges} from '@angular/core';
import {FormControl} from "@angular/forms";
import {PollService} from "../../services/poll.service";
import {UserService} from "../../services/user.service";
import {PollOption} from '../../models/poll-option';

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnChanges {
  @Input()
  pollOptions!: PollOption[];
  @Input()
  pollId!: string | undefined;
  selectedOption = new FormControl();

  constructor(private pollService: PollService, private userService: UserService) {
  }

  ngOnChanges() {
    console.log('Options', this.pollOptions)
  }

  submit() {
    console.log('Selected option:', this.selectedOption.value);
    this.pollService.submitVote({
      user: this.userService.userId,
      pollId: this.pollId,
      optionId: this.selectedOption.value.id
    }).then();
  }

}
