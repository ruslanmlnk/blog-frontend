export interface WeeklyNewsletter {
  id: string;
  email?: string;
  createdAt: string;
}

export interface CreateWeeklyNewsletterResponse {
  createWeeklyNewsletter: WeeklyNewsletter;
}
