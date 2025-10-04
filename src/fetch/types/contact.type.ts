export interface Contact {
  id: string;
  title: string;
  description: string;
}

export interface Contacts {
  Contacts: {
    docs: Contact[];
  };
}

