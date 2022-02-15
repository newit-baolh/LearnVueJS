<template>
  <div class="home">
    Home
    <p>My name is {{name}} and age {{age}}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  setup(){
    console.log('setupy');

    let name = 'mario'
    let age = 30
    const handleClick = ()=>{
      console.log('Click me');
    }

    return {
      name, age, handleClick
    }
  },
  data(){
    return {
      age: 40,
    }
  }
}
</script>
