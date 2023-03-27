import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Option} from "src/app/model/option"
import {PollService} from "src/app/poll.service";

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit{
  options: Observable<any[]> = new Observable<any[]>;
  selectedOption: Option;
  constructor(private pollService: PollService) {
    this.selectedOption = {value: "Not Selected", votes: 0};

  }

  ngOnInit() {
    this.options = this.pollService.getOptions();
  }


  public test() {
    console.log(this.selectedOption);
  }



}
