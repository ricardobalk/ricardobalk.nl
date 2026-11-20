import type { FeatureFlag } from '@/composables/useFeatureFlags';
import type { ILink } from '@/types/link';

export interface NavigationItem {
  label: string;
  feature?: FeatureFlag;
  link?: ILink;
  children?: NavigationItem[];
}

export type NavigationItems = NavigationItem[];
