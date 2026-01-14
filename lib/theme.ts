import { ThemeMode } from '@/types';

/**
 * Theme management utilities
 */

export const THEME_STORAGE_KEY = 'scheduler-theme';

/**
 * Get stored theme preference
 */
export function getStoredTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'system';

  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }
  return 'system';
}

/**
 * Store theme preference
 */
export function setStoredTheme(theme: ThemeMode): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

/**
 * Get effective theme (resolves 'system' to actual theme)
 */
export function getEffectiveTheme(mode: ThemeMode): 'light' | 'dark' {
  if (mode !== 'system') return mode;

  if (typeof window === 'undefined') return 'light';

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Apply theme to document
 */
export function applyTheme(mode: ThemeMode): void {
  if (typeof window === 'undefined') return;

  const effective = getEffectiveTheme(mode);
  const root = document.documentElement;

  root.classList.remove('light', 'dark');
  root.classList.add(effective);
  root.setAttribute('data-theme', effective);
}
