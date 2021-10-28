export interface ContactUsPara {
  category: string;
  name: string;
  email: string;
  title: string;
  description: string;
  attachments?: { name: string; data: string }[];
}
