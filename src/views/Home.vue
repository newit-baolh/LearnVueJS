<template>
  <div class="home">
    Home
    <p ref="p">My name is {{name}} and age {{age}}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  name: 'Home',
  setup(){
    console.log('setupy');

    const p =ref(null)

    let name = 'mario'
    let age = 30
    const handleClick = ()=>{
      console.log(p);
    }

    return {
      name, age, handleClick, p
    }
  },
  data(){
    return {
      age: 40,
    }
  }
}
</script>
