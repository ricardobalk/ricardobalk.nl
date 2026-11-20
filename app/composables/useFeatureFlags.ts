import type { PublicRuntimeConfig } from 'nuxt/schema';

export type FeatureFlag = keyof PublicRuntimeConfig['features'];

export function useFeatureFlags() {
  const { features } = useRuntimeConfig().public;

  return {
    isFeatureEnabled: (feature: FeatureFlag) => [true, 1].includes(features[feature]),
  };
}
