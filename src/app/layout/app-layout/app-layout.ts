import { Component } from '@angular/core';
export type InterviewStatus = 'Scheduled' | 'Completed' | 'Cancelled';

export interface Interview {
  id: number;
  candidateName: string;
  status: InterviewStatus;
  scheduledAt: Date;
  role: string;
  interviewer: String;
}


@Component({
  selector: 'app-app-layout',
  imports: [],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.scss',
})


export class AppLayout {

  interviews: Interview[] = [
    {
      id: 100,
      candidateName: "Rohit",
      status: "Completed",
      scheduledAt: new Date('2026-09-24T10:00:00'),
      role: "Java Backend Developer",
      interviewer: "Rohit Aggarwal"
    },
    {
      id: 200,
      candidateName: "Mohit",
      status: "Cancelled",
      scheduledAt: new Date('2026-09-24T10:00:00'),
      role: "FE Developer",
      interviewer: "Garv Aggarwal"
    },
    {
      id: 200,
      candidateName: "Rajesh",
      status: "Scheduled",
      scheduledAt: new Date('2026-09-24T10:00:00'),
      role: "FE Developer",
      interviewer: "Garv Aggarwal"
    }
  ];

  get completedCount(): number {
    return this.interviews.filter(i => i.status === 'Completed').length;
  }
  get scheduledCount(): number {
    return this.interviews.filter(i => i.status === 'Scheduled').length;
  }

  get feedbackCount(): number {
    return 1;
  }
}
