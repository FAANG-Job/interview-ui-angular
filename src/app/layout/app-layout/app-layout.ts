import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { InterviewStatus, Interview } from '../../models/interview';
import { InterviewService } from '../../services/interview.service';

@Component({
  selector: 'app-app-layout',
  imports: [RouterOutlet],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.scss',
})


export class AppLayout {
  private interviews: Interview[] = [];
  constructor(private router: Router, private interviewService: InterviewService) {
    this.interviews = interviewService.getInterviews();
  }
  get completedCount(): number {
    return this.interviews.filter(i => i.status === 'Completed').length;
  }
  get scheduledCount(): number {
    return this.interviews.filter(i => i.status === 'Scheduled').length;
  }

  get feedbackCount(): number {
    return 1;
  }

  scheduleInterview() {
    this.router.navigate(['/schedule-interview']);
  }
}
