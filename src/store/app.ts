import { AppState } from "@/store/vuex";

const getDefaultState = (): AppState => ({
  isExpanded: false,
});

const mutations = {
  TOGGLE_DRAWER(state: AppState): void {
    state.isExpanded = !state.isExpanded;
  },
};

export default {
  namespaced: true,
  mutations,
  state: getDefaultState(),
};
