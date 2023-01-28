import { inject } from "vue";
import { usePagesData } from "@vuepress/client";
import type { InjectionKey } from "vue";
import type { PageData } from "@vuepress/core/lib/types";

export const pagesSymbol: InjectionKey<Promise<PageData[]>> = Symbol("pages");

/**
 * Inject pages global computed
 */
export const usePages = async (): Promise<PageData[]> => {
  const pages = inject(pagesSymbol);
  if (!pages) {
    throw new Error("usePages() is called without provider.");
  }
  return pages;
};

export const resolvePages = async (): Promise<PageData[]> => {
  const pagesData = usePagesData();

  const pages = await Promise.all(Object.keys(pagesData.value).map((key) => pagesData.value[key]()));

  return pages as PageData[];
};
