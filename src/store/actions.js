import * as types from './mutation-types'

export const add_ = ({commit}) => {
    commit('add')
}
export const plus_ = ({commit}) => {
    commit('plus')
}

export const toggleSidebar = ({ commit }, opened) => commit(types.TOGGLE_SIDEBAR, opened)
export const genTree = ({ commit },list) => commit(types.GEN_Tree,list)
export const addUserList = ({ commit},params) => commit(types.ADD_User_List,params)
export const createUser = ({ commit},params) => commit(types.CREATE_User,params)
export const test_ = ({commit}) => commit('test')
