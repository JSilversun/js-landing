import { AppState } from "@/store/vuex";

const getDefaultState = (): AppState => ({
  isExpanded: false,
  isHomeVisible: true,
});

const mutations = {
  TOGGLE_DRAWER(state: AppState): void {
    state.isExpanded = !state.isExpanded;
  },
  SET_HOME_VISIBILITY(state: AppState, isHomeVisible: boolean): void {
    state.isHomeVisible = isHomeVisible;
  },
};

export default {
  namespaced: true,
  mutations,
  state: getDefaultState(),
};
