<template lang="html">
  <div class="stats">
    <h1>Count of Todo list</h1>
    <p>There are currently {{ countTodo }} Todo</p>

    <button @click="removeALLTodo" >Remove all Todo</button>
    {{ msg }}
  </div>
</template>

<script>
import { mapGetters,mapActions,mapMutations } from 'vuex'
export default {
  name:'Stats',
  data(){
    return{
      msg: ''
    }
  },
  computed:{
    ...mapGetters([
      'countTodo'
    ])
  },
  methods: {
    ...mapMutations(['REMOVE_ALL']),
    ...mapActions(['removeALL']),
    removeALLTodo(){
      this.removeALL().then(()=>{
        this.msg = "They have been removed"
      })
    }
  }
}
</script>

<style lang="css" scoped>
button {
    padding: 10px;
    margin-top: 30px;
    width: 100%;
    background: none;
    border: 1px solid lightgray;
    outline: 0;
    cursor: pointer;
    border-radius: 8px;
}
</style>
