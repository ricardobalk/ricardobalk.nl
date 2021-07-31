import type { NavLink, SidebarConfig } from "@/theme/types/nav";

export interface ArticleFrontmatter {
  blog?: boolean;
  portfolio?: boolean;
  guide?: boolean;
  editLink?: boolean;
  lastUpdated?: boolean;
  contributors?: boolean;
  prev?: string | NavLink;
  next?: string | NavLink;
  sidebar?: "auto" | false | SidebarConfig;
}

export interface BlogArticleFrontmatter extends ArticleFrontmatter {
  blog: true;
}

export interface PortfolioItemFrontmatter extends ArticleFrontmatter {
  portfolio: true;
}

export interface GuideFrontmatter extends ArticleFrontmatter {
  guide: true;
}
