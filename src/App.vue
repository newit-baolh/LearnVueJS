<template>
  <h1>Reaction Timer</h1>
  <button class="btn-play" @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay"/>
</template>

<script>
import Block from './components/Block.vue'
export default {
  name: 'App',
  components: {
    Block
  },
  data() {
    return {
      isPlaying: false,
      delay: null
    }
  },
  methods: {
    start(){
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      console.log(this.delay);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
.btn-play{
  padding: 10px;
  border: none;
  background: rgb(218, 238, 206);
  
}
.btn-play:hover{
  background: rgb(166, 241, 123);
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
}
.btn-play:disabled{
  border: none;
  background: rgb(218, 238, 206);
}
</style>
