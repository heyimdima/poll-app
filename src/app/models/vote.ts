export interface Vote {
  id?: string;
  pollId: string | undefined;
  optionId: string;
  user: string;
}
