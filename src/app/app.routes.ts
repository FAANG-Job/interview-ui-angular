import { Routes } from '@angular/router';
import { InterviewList } from './features/interview-list/interview-list';
import { AppLayout } from './layout/app-layout/app-layout';
import { scheduleInterview } from './features/schedule-interview/schedule-interview';


export const routes: Routes = [
    {
        path: 'dashboard',
        component: AppLayout,
    },
    {
        path: 'interviews',
        component: InterviewList,
    },
    {
        path: 'schedule-interview',
        component: scheduleInterview,
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
];
