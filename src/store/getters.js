//定义一个数count
export const getcount = state => {
    return state.count
}
//侧边栏
export const getsidebar = state => {
    return state.sidebar
}
//菜单
export const menuitems = state =>{
    return state.menuitems
}
//得到列表
export const getlist = state => {
  return state.list
}
// 增加角色
export const getTableData = state => {
  return state.tableData
}

// 增加角色
export const getArray = state => {
  return state.ArrayList
}

// 增加角色参数
export const getParams = state => {
  return state.paramsStore
}

export const getSuccess= state => {
  return state.success_message
}
export const getbool_ = state => {
  return state.getbool
}
