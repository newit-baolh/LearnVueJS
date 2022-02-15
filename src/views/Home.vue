<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{blog.name}} - {{blog.age}}</p>
    <button @click="updateAge">Update</button>
    <h2>Reactive</h2>
    <p>{{lemon.name}} - {{lemon.age}} - {{nameOne}}</p>
    <button @click="updateLemon">Update Lemon</button>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
export default {
  name: 'Home',
  setup(){
    const blog =ref({name: 'Meo', age: 10})
    const lemon = reactive({ name: 'lemon', age: 1})

    const nameOne = reactive('nameOne')

    const updateAge = ()=>{
      blog.value.age = 12
    }

     const updateLemon = ()=>{
      lemon.age = 2
      nameOne = reactive('pop')
    }


    return {
      blog, updateAge, lemon, updateLemon, nameOne
    }
  }
}
</script>
