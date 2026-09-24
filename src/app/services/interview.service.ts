import { Injectable, isWritableSignal, signal } from '@angular/core';
import { InterviewStatus } from "../models/interview";
import { Interview } from "../models/interview";
@Injectable({
    providedIn: 'root',
})
export class InterviewService {
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

    getInterviews(): Interview[] {
        return this.interviews();
    }



}


