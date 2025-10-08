export interface ContactMessage {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  message?: string;
  createdAt: string;
}

export interface CreateContactMessageResponse {
  createContactMessage: ContactMessage;
}
