<template>
  <h1>Reaction Timer</h1>
  <button class="btn-play" @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Result v-if="showResult" :score="score" />
</template>

<script>
// challenge
// - when the game ends, show the results component
// - output the score inside the results component

import Block from './components/Block.vue'
import Result from './components/Result.vue'

export default {
  name: 'App',
  components: {
    Block,
    Result
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false
    }
  },
  methods: {
    start(){
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true,
      this.showResult = false
    },
    endGame(reactionTime){
      this.score = reactionTime
      this.isPlaying = false
      this.showResult = true
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
  padding: 8px 16px;
  border: none;
  background: rgb(218, 238, 206);
  font-size: 16px;
  letter-spacing: 1px;
  
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
  cursor: not-allowed;
}
</style>
