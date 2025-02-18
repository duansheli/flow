import { useAppProviderContext } from '/@/components/Application';
import { computed, unref } from 'vue';

export function useApexCharts() {
  const values = useAppProviderContext();

  return {
    getIsMobile: computed(() => unref(values.isMobile)),
  };
}
