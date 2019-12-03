const state = {
  companyInfo: JSON.parse(localStorage.getItem('companyInfo')) || {info:{companyId:''}},
  companyPost: []
};
const getters = {
  getCompanyInfo(state) { //承载变化的collects
    return state.companyInfo;
  },
  getCompanyPost(state) { //承载变化的collects
    return state.companyPost;
  }
};
const mutations = {
  setCompanyInfo(state, playload) { //如何变化collects,插入items
    state.companyInfo = playload
  },
  setCompanyPost(state, playload) { //如何变化collects,插入items
    state.companyPost = playload
  }
};
const actions = {
  asyncsetCompanyInfo(context, playload) {
    context.commit('setCompanyInfo', playload)
    localStorage.setItem('companyInfo', JSON.stringify(playload))
  },
  asyncsetCompanyPost(context, playload) {
    context.commit('setCompanyPost', playload)
  }
};
export default {
  namespaced: true,//用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}