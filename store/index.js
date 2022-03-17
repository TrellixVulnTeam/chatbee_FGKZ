export const state = () => ({
  loadingMain: false,
  primary: "#FFBC00",
  accessToken: '',
  expand: true,
  auth: false,
  alertmodal: false
});

export const getters = {
  get_bussuserByID: (state) => (userId) => {
    if (state.materials) {
      return state.materials.find(materials => materials.user_id == userId)
    }
  },
};

export const mutations = {
  SET_AUTH (state, data) {
    state.auth = true
  },
  SET_ALERTMODAL (state, data) {
    state.alertmodal = data
  },
  SET_TOKEN (state, data) {
    state.accessToken = data
  },
  SET_EXPAND_TOGGLE (state) {
    state.expand = !state.expand
  },
  SET_EXPAND (state, data) {
    state.expand = data
  },
};

export const actions = {
};
