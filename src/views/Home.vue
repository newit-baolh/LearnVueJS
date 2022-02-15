<template>
  <div class="home">
    Home
    <p ref="p">My name is {{name}} and age {{age}}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Add 1 age</button>
    <input type="text" name="" id="" v-model="name">
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  name: 'Home',
  setup(){
    console.log('setupy');

    const p =ref(null)

    const name = ref('mario')
    const age = ref(30)

    const handleClick = ()=>{
      name.value = 'bao'
      age.value = 40
    }

    return {
      name, age, handleClick, p
    }
  },
  data(){
    return {
      score: 40,
    }
  }
}
</script>
