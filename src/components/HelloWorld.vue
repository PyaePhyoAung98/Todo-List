<template lang="html">
  <div class="hello">
    <div class="left">
      <h1>{{ title }}</h1>
      <form @submit.prevent="addTodo">
        <input type="text" class="todo-input" placeholder="Add a Todo" v-model="newTodo" name="" value="">
      </form>
      <ul>
        <li v-for="(todo, index) in todo" v-bind:key="index">
          {{ todo }}
          <button @click="removeTodos(index)" class="rm">Remove</button>

        </li>
      </ul>
    </div>
    <div class="right">
      <Stats/>
    </div>
  </div>

</template>

<script>
import Stats from '@/components/Stats.vue'
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  name:'HelloWorld',
  data(){
    return{
      newTodo:''
    }
  },
  components:{
    Stats
  },
  //Logic:
  computed:{
  ...mapState([
    'title',
    'todo'
  ])
},
methods:{
  ...mapMutations([
    'ADD_TODO'
  ]),
  ...mapActions([
    'removeTodo'
  ]),
  addTodo:function(){
    this.ADD_TODO(this.newTodo)
    this.newTodo=''
  },
  removeTodos: function(todo){
    this.removeTodo(todo)
  }
}
}
</script>

<style lang="css" scoped>
html,#app, .home{
  height: 100%;
}
body{
  background-color: #F4F4F4;
   margin: 0;
   height: 100%;
}
.hello{
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100%;
  grid-template-areas: "left right";
  height: 100%;
}
.left, .right {
  padding: 30px;
}
ul li{
  padding: 20px;
  background: white;
  margin-bottom: 8px;
  border-radius: 8px;

}
ul{
  list-style-type: none;
  padding: 0;
  text-align: left;
}
.right{
  grid-area: right;
  background-color: #E9E9E9;
}
.left{
  grid-area: left;
  background-color: #eee;
}
input{
  border:none;
  padding: 20px;
  width: calc(100% - 40px);
  box-shadow: 0 5px 5px lightgrey;
  margin-bottom: 50px;
  outline: none;
  border-radius: 8px;
}
.rm{
  float: right;
  text-transform: uppercase;
  font-size: .8em;
  background: #f9d0e3;
   border: none;
   padding: 5px;
   color: #ff0076;
   cursor:pointer;
   border-radius: 6px;
}
</style>
