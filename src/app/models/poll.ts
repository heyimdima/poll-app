import {PollOption} from "./poll-option";

export interface Poll {
  id?: string;
  question: string;
  options: PollOption[];
}
