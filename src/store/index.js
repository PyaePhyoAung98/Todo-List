import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:'Todo App',
    todo:[
      'go to sleep',
      'to code',
      'to eat'
    ]
  },
  getters:{
    countTodo:state => {
      return state.todo.length
    }
  },
  mutations: {
    ADD_TODO:(state, todo) => {
      state.todo.push(todo)
    },
    REMOVE_TODO: (state,todo)=>{
      state.todo.splice(todo, 1)
    },
    REMOVE_ALL:(state)=>{
      state.todo = []
    }
  },
  actions: {
    removeTodo: (context, todo) => {
      context.commit("REMOVE_TODO", todo)
    },
    removeALL({commit}){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          commit('REMOVE_ALL')
          resolve()
        },500)
      })
    }
  },
  modules: {
  }
})
