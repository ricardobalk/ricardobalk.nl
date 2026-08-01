import type { RouteLocationRaw } from 'vue-router';

export interface ILink {
  to: RouteLocationRaw;
  target?: '_blank' | '_self' | '_parent' | '_top';
  title?: string;
  rel?: 'alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'next' | 'nofollow' | 'noreferrer' | 'noopener' | 'prev' | 'search' | 'tag';
  download?: boolean;
  referrerpolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
}
