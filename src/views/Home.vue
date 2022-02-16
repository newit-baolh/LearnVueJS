<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{search}}</p>
    <div v-for="name in matchingNames" :key="name">{{name}}</div>
    <button @click="handleClick">Stop watch</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from '@vue/runtime-core';
export default {
  name: 'Home',
  setup(){
    const search = ref('')
    const names = ref(['ni','bo','oi'])

    const stopWatch = watch(search, ()=>{
      console.log(' watch run');
    })

    const stopWatcheffect = watchEffect(()=>{
      console.log('watcheffect run', search.value);
    })

    const matchingNames = computed(()=>{
      return names.value.filter((name)=> name.includes(search.value))
    })

    const handleClick = ()=>{
      stopWatch()
      stopWatcheffect()
    }
    return {names, search, matchingNames, handleClick}
  }
}
</script>
