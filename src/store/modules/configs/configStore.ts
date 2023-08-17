import { create } from "zustand";
interface ConfigStoreProps {
  configs: any;
}
export const useConfigStore = create<ConfigStoreProps>((set) => ({
  configs: null,
}));
