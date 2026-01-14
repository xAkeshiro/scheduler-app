// User types
export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Schedule types
export interface ScheduleEvent {
  id: string;
  userId: string;
  title: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  location?: string;
  color?: string;
  isRecurring: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ClassSchedule {
  id: string;
  userId: string;
  className: string;
  instructor?: string;
  room?: string;
  dayOfWeek: number; // 0-6 (Sunday-Saturday)
  startTime: string; // HH:mm format
  endTime: string; // HH:mm format
  color?: string;
  semester?: string;
}

// Friend types
export interface Friend {
  id: string;
  userId: string;
  friendId: string;
  status: 'pending' | 'accepted' | 'blocked';
  createdAt: Date;
}

// Theme types
export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeConfig {
  mode: ThemeMode;
  customTheme?: string;
}

// Settings types
export interface UserSettings {
  userId: string;
  theme: ThemeConfig;
  language: 'en' | 'ja';
  notifications: boolean;
  shareSchedule: boolean;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  requiresAuth?: boolean;
}
