import { Injectable, isWritableSignal, signal } from '@angular/core';
import { InterviewStatus } from "../models/interview";
import { Interview } from "../models/interview";
@Injectable({
    providedIn: 'root',
})
export class InterviewService {
    private readonly instanceId = Math.random().toString(36).slice(2, 8);

    private interviews = signal<Interview[]>([
        {
            id: 100,
            candidateName: "Rohit",
            status: InterviewStatus.COMPLETED,
            scheduledAt: new Date('2026-09-24T10:00:00'),
            role: "Java Backend Developer",
            interviewer: "Rohit Aggarwal"
        },
        {
            id: 200,
            candidateName: "Mohit",
            status: InterviewStatus.SCHEDULED,
            scheduledAt: new Date('2026-09-24T10:00:00'),
            role: "FE Developer",
            interviewer: "Garv Aggarwal"
        },
        {
            id: 300,
            candidateName: "Rajesh",
            status: InterviewStatus.FEEDBACK_PENDING,
            scheduledAt: new Date('2026-09-24T10:00:00'),
            role: "FE Developer",
            interviewer: "Garv Aggarwal"
        }

    ]);
    constructor() {
        console.log('InterviewService CREATED:', this.instanceId);
    }

    getInterviews(): Interview[] {
        return this.interviews();
    }

    addInterview(interview: Interview): void {
         alert(this.interviews().length);
        this.interviews.update(currentInterviews => [
            ...currentInterviews,
            interview,
        ]);
        console.log(
            'After add:',
            this.interviews().length
        );
       
    }

}


