import { createContext, useContext, type ReactNode } from 'react';
import companyData from '@/assets/ServicesData/companyInfo.json';

// 1. Интерфейсы данных
export interface IPhoneContacts {
  phoneMain: string;
  phoneAdd: string;
  phoneEmergency: string;
}

export interface IMailContacts {
  mailMain: string;
  mailSpport: string;
}

export interface ICompanyContacts {
  phone: IPhoneContacts;
  mail: IMailContacts;
  'ofice-location': string;
  'work-time': string;
}

const ContactsContext = createContext<ICompanyContacts>(companyData[0] as ICompanyContacts);

interface ContactsProviderProps {
  children: ReactNode;
}

export const ContactsProvider: React.FC<ContactsProviderProps> = ({ children }) => (
  <ContactsContext.Provider value={companyData[0] as ICompanyContacts}>
    {children}
  </ContactsContext.Provider>
);

// 4. Кастомные хуки для удобного доступа
export const useCompanyContacts = () => useContext(ContactsContext);
export const usePhones = () => useContext(ContactsContext).phone;