import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)


let selectModule = {
	state:{
		title:"",
		listData:[]
	},
	mutations:{
		changeTitle(state,payload){
			state.title = payload.title
		},
		getListData(state,listData){
			state.listData = listData;
		}
	},
	actions:{
		getListAction(context){  //
			axios.get('https://www.easy-mock.com/mock/5c1767c06ccaa7461ef01ee9/example/dataList')
			.then( (data)=>{
				context.commit('getListData',data.data)
			} )
			.catch((error)=>{
				console.log(error)
			})
		}
	}
}

let store = new Vuex.Store({
	state:{
		count:100,
	},
	mutations:{
		addHandle(state,payload){
			state.count+=payload.n;
		},
		reduceAction(state,payload){
			state.count-=payload.n;
		}
		
	},
	actions:{
		addAction(context){
			setTimeout(()=>{
				context.commit('addHandle',{n:15})
			},1000)
		}
		
	},
	getters:{
		filterNum(state){
			return state.count>=102?102:state.count
		}
	},
	modules:{
		selectModule
	}
})

export default store