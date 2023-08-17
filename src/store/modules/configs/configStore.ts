import { create } from "zustand";
interface ConfigStoreProps {
  configs: any;
  setConfigs: (configs: any) => void;
}
export const useConfigStore = create<ConfigStoreProps>((set) => ({
  configs: null,
  setConfigs: (configs: any) => set(() => ({ configs: configs })),
}));
