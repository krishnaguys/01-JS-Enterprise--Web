export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  productInterest?: string;
  budget?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}