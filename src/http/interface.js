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
export const getAllPost = params => {
    return axios({
        url: '/companys/allPost',
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
export const fetchArticle = params => {
    return axios({
        url: '/article',
        method: 'get',
        params
    })
}
export const fetchArticleList = params => {
    return axios({
        url: '/article/typeList',
        method: 'get',
        params
    })
}
export const editArticle = data => {
    return axios({
        url: '/article/edit',
        method: 'post',
        data
    })
}
export const filterArticleList = params => {
    return axios({
        url: '/article/type',
        method: 'get',
        params
    })
}
export const addArticle = data => {
    return axios({
        url: '/users/addArticle',
        method: 'post',
        data
    })
}

export const detailArticle = params => {
    return axios({
        url: '/article/detail',
        method: 'get',
        params
    })
}

export const delectlArticle = params => {
    return axios({
        url: '/article/delect',
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
    addPost,
    getAllPost,
    fetchArticle,
    addArticle,
    detailArticle,
    fetchArticleList,
    filterArticleList,
    editArticle,
    delectlArticle
}
