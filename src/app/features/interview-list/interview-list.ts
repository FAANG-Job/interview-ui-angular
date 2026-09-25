import { Component, inject } from '@angular/core';
import { InterviewStatus } from '../../models/interview';
import { Interview } from '../../models/interview';
import { InterviewService } from '../../services/interview.service';


InterviewStatus
@Component({
  selector: 'app-interview-list',
  imports: [],
  templateUrl: './interview-list.html',
  styleUrl: './interview-list.scss',
})
export class InterviewList {
  private readonly interviewService = inject(InterviewService);

  get interviews(): Interview[] {
    return this.interviewService.getInterviews();
  }

}
