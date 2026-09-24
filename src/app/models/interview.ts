export enum InterviewStatus {
    SCHEDULED = 'Scheduled',
    COMPLETED = 'Completed',
    FEEDBACK_PENDING = 'Feedback Pending',
}

export interface Interview {
    id: number;
    candidateName: string;
    status: InterviewStatus;
    scheduledAt: Date;
    role: string;
    interviewer: string;
}