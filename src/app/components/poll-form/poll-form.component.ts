import {Component, Input} from '@angular/core';
import {Poll} from "../../models/poll";
import {FormControl} from "@angular/forms";
import {PollService} from "../../services/poll.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent {
  @Input()
  poll!: Poll;
  selectedOption = new FormControl();

  constructor(private pollService: PollService, private userService: UserService) {
  }

  onSubmit() {
    // console.log('Selected option:', this.selectedOption.value);
    //
    // this.userService.getUniqueId().subscribe(
    //   (uniqueId: string) => {
    //     this.pollService.submitVote({
    //       user: uniqueId,
    //       pollId: this.poll.id,
    //       optionId: this.selectedOption.value.id
    //     });
    //     this.pollService.showPoll = false;
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
  }

}
