import React from 'react';

export interface ServiceItem {
  title: string;
  items: string[];
  logos: React.ReactNode[];
}

export interface ExpertiseStat {
  label: string;
  value: string;
  suffix?: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'error'
}

export interface ContactFormData {
  name: string;
  email: string;
  website: string;
  revenue: string;
  budget: string;
  message: string;
}