import type { ILink } from '@/types/link';

export interface NavigationItem {
  label: string;
  link?: ILink;
  children?: NavigationItem[];
}

export type NavigationItems = NavigationItem[];
