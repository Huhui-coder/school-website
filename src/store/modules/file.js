import axios from 'axios'


const module = {
    namespaced: true,
    state: {
        file: {}
    },
    getters: {
        file(state) {
            return state.file
        }
    },
    mutations: {
        updateFile(state, data) {
            state.file = data
        }
    },
    actions: {
        // 上传文件
        uploadFile({ state, commit }, file) {
            return axios.post(`http://localhost:3000/uploads/single`, file, {
                timeout: 120000, // 最多2分钟
                'Content-Type': 'multipart/form-data'
            }).then(res => {
                commit('updateFile', res.data)
                return res
            }).catch(err => {
                throw err
            })
        },
        //将上传文件路径保存到用户信息表中
        save({ state, commit }, params) {
            return axios.get(`http://localhost:3000/uploads/save`, { params }, {
                timeout: 120000, // 最多2分钟
                'Content-Type': 'application/json;charset=UTF-8'
            }).then(res => {
                return res
            }).catch(err => {
                throw err
            })
        },
    }
}

export default module
