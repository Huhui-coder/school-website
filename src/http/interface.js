import axios from './api' // 倒入 api

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 此处的数据依然来自 Easy Mock
 */

// 单独导出


export const studentLogin = data => {
    return axios({
        url: '/students/login',
        method: 'post',
        data
    })
}
export const companyLogin = data => {
    return axios({
        url: '/companys/login',
        method: 'post',
        data
    })
}
export const studentRegister = data => {
    return axios({
        url: '/students/register',
        method: 'post',
        data
    })
}
export const companyRegister = data => {
    return axios({
        url: '/companys/register',
        method: 'post',
        data
    })
}

export const editUserInfo = data => {
    return axios({
        url: '/students/editUserInfo',
        method: 'post',
        data
    })
}

export const getUserInfo = params => {
    return axios({
        url: '/students/getUserInfo',
        method: 'get',
        params
    })
}
export const editCompanyInfo = data => {
    return axios({
        url: '/companys/editCompanyInfo',
        method: 'post',
        data
    })
}
export const addPost = data => {
    return axios({
        url: '/companys/addPost',
        method: 'post',
        data
    })
} 
export const getPostList = params => {
    return axios({
        url: '/companys/postList',
        method: 'get',
        params
    })
} 
export const getCompanyInfo = params => {
    return axios({
        url: '/companys/getCompanyInfo',
        method: 'get',
        params
    })
}
export const postDetail = params => {
    return axios({
        url: '/companys/postDetail',
        method: 'get',
        params
    })
}


export const editPost = data => {
    return axios({
        url: '/companys/edit',
        method: 'post',
        data
    })
}  
export const delPost = params => {
    return axios({
        url: '/companys/delPost',
        method: 'get',
        params
    })
}
export const allPost = params => {
    return axios({
        url: '/companys/allPost',
        method: 'get',
        params
    })
}










// 默认全部倒出
// 根绝需要进行  
export default {
    studentLogin,
    studentRegister,
    companyLogin,
    companyRegister,
    editUserInfo,
    getUserInfo,
    editCompanyInfo,
    getCompanyInfo,
    postDetail,
    addPost,
    getPostList,
    editPost,
    delPost,
    allPost
}
