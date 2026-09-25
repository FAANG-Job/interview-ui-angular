import { Component, computed, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { InterviewStatus, Interview } from '../../models/interview';
import { InterviewService } from '../../services/interview.service';

@Component({
  selector: 'app-app-layout',
  imports: [],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.scss',
})


export class AppLayout {
  private readonly router = inject(Router);
  private readonly interviewService = inject(InterviewService);

  get interviews(): Interview[] {
    return this.interviewService.getInterviews();
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
