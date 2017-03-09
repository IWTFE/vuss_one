import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as types from './mutation-types'
import {
  requestPowerUserList,requestPowerCreateUser
} from '../api/api'

Vue.use(Vuex)

const state={
  count:44,
  success_message:false,
  sidebar: {
    opened: false, //打开
    hidden: false  //隐藏
  },
  menuitems:[],
  list:[],
  tableData: [],
  paramsStore:{},
  ArrayList:[],
  getbool:false
}
const mutations={
  //test11(state,a){alert(a)},
  add(state){
    state.count ++
  },
  plus(state){
    state.count --
  },
  test(state){
    // state.ArrayList = [1,2,3]
    // console.log(state.getbool)
    if(state.getbool == false) {
      state.getbool = true
    }else{
      state.getbool = false
    }
    //console.log(getters.getParams)
    // alert(getters.getParams())
    // alert(state.tableData)
  },
  [types.TOGGLE_SIDEBAR] (state, opened) {
  if (state.sidebar.opened === true) {
    state.sidebar.opened = opened
    // alert('opened')
  } else {
    state.sidebar.opened = true
    // alert('true')
  }
},
  [types.GEN_Tree] (state,list) {
    var temptree = [], tree = [], items = [];
    for (var i in list) {
        if (!temptree[list[i].did]) {
            var trow = {
                id:  list[i].did,
                did: list[i].did,
                fid: list[i].fid,
                path: list[i].path,
                name:list[i].name,
                children: []
            };
            temptree[list[i].did] = trow;
            items.push(trow);
        }
        if (list[i].uid > 0) {

            temptree[list[i].did]['children'].push({
                id: list[i].uid,
                path: list[i].realname,
                iconCls: 'im_user',
                name:list[i].name,
            });
        }
    }

    for (var j in items) {
        if (temptree[items[j].fid]) {
            temptree[items[j].fid]['children'].push(temptree[items[j].did]);
        } else {
            tree.push(temptree[items[j].did]);
        }
    }
    temptree = null;
    items = null;
       state.list = tree
  },
  [types.ADD_User_List] (state,params) { //获取用户列表
    let that = this
    var verifyParams = params
    console.log(params)
    console.log('角色列表数据')
    requestPowerUserList(verifyParams).then(function(response) {
      console.log(response.body.dateList)
      state.tableData = []
      for (let i=0;i<response.body.dateList.length;i++){
           // that.listLoading = true;
           state.tableData.push(response.body.dateList[i])
           // console.log(state.tableData)
          // getters.
      }
      // that.listLoading = false;
    }).catch(function(error) {
      console.log(error)
    })
  },
  [types.CREATE_User] (state,params) {
    var that = this
    var verifyParams = params
    // console.log('创建角色数据')
    requestPowerCreateUser(verifyParams).then(function(response){
      //console.log(JSON.parse(response))
      if(response.head.result === 0){
        alert('成功！');
        state.success_message = true
        //that.call(callback,that);
      }
    })

  }
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
