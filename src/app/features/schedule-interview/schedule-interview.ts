import { Component } from '@angular/core';
import { Interview, InterviewStatus } from '../../models/interview';
import { InterviewService } from '../../services/interview.service';

let counter = 0;


@Component({
  selector: 'app-schedule-interview',
  imports: [],
  templateUrl: './schedule-interview.html',
  styleUrl: './schedule-interview.scss',
})

export class scheduleInterview {
 interviewService: InterviewService;

  constructor(interviewService: InterviewService) {
    this.interviewService = interviewService;
  }


  addNewInterview(candidateName: string, role: string, interviewer: string, scheduledAt: string) {
    console.log({
      candidateName,
      role,
      interviewer,
      scheduledAt,
    });

    const interview: Interview = {
      id: counter++,
      candidateName: candidateName,
      status: InterviewStatus.SCHEDULED,
      scheduledAt: new Date(scheduledAt),
      role: role,
      interviewer: interviewer
    };
    this.interviewService.addInterview(interview);
  }
}