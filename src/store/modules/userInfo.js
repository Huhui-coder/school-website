const state = {
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || {info:{studentId:''}},
  userApplyList:[]
};
const getters = {
  getUserInfo(state) { 
    return state.userInfo;
  },
  getUserApplyList(state) { 
    return state.userApplyList;
  }
};
const mutations = {
  setUserInfo(state, playload) { //如何变化collects,插入items
    state.userInfo = playload
  },
  setStudentApply(state, playload) { //如何变化collects,插入items
    state.userApplyList = playload
  }
};
const actions = {
  asyncsetUserInfo(context, playload) {
    context.commit('setUserInfo', playload)
    localStorage.setItem('userInfo', JSON.stringify(playload))
  },
  asyncsetStudentApply(context, playload) {
    context.commit('setStudentApply', playload)
  }
};
export default {
  namespaced: true,//用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}