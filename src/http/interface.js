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
export const addApply = data => {
    return axios({
        url: '/students/addApply',
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
export const getApplyList = params => {
    return axios({
        url: '/students/applyList',
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

export const myApplyList = params => {
    return axios({
        url: '/companys/myApplyList',
        method: 'get',
        params
    })
}

export const applyDetail = params => {
    return axios({
        url: '/students/applyDetail',
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
export const editApply = data => {
    return axios({
        url: '/students/edit',
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

export const delApply = params => {
    return axios({
        url: '/students/delApply',
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

export const allApply = params => {
    return axios({
        url: '/students/allApply',
        method: 'get',
        params
    })
}
export const delivery = params => {
    return axios({
        url: '/students/delivery',
        method: 'get',
        params
    })
}

export const myPostList = params => {
    return axios({
        url: '/students/myPostList',
        method: 'get',
        params
    })
}

//获取所有的公司
export const allCompanyList = params => {
    return axios({
        url: '/companys',
        method: 'get',
        params
    })
}
//成为vip  
export const beCompanysVIP = params => {
    return axios({
        url: '/companys/beVIP',
        method: 'get',
        params
    })
}
//成为vip  
export const beStudentVIP = params => {
    return axios({
        url: '/students/beVIP',
        method: 'get',
        params
    })
}
export const beCompanyVIP = params => {
    return axios({
        url: '/companys/beVIP',
        method: 'get',
        params
    })
}
//获取推送
export const fetchArticles = params => {
    return axios({
        url: '/articles',
        method: 'get',
        params
    })
}
//新增推送文字
export const addArticles = data => {
    return axios({
        url: '/articles/add',
        method: 'post',
        data
    })
}

//删除推送
export const delArticles = params => {
    return axios({
        url: '/articles/del',
        method: 'delete',
        params
    })
}
//查找推送文字详情
export const detailArticles = params => {
    return axios({
        url: '/articles/detail',
        method: 'get',
        params
    })
}
//获取学生个人信息全部
export const getAllUserInfo = params => {
    return axios({
        url: '/students/info',
        method: 'get',
        params
    })
}
//获取商家个人信息全部
export const getAllCompanyInfo = params => {
    return axios({
        url: '/companys/info',
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
    addApply,
    getPostList,
    getApplyList,
    applyDetail,
    editPost,
    editApply,
    delPost,
    delApply,
    allPost,
    allApply,
    delivery,
    myPostList,
    myApplyList,
    allCompanyList,
    beCompanysVIP,
    beStudentVIP,
    beCompanyVIP,
    fetchArticles,
    addArticles,
    delArticles,
    detailArticles,
    getAllUserInfo,
    getAllCompanyInfo
}
