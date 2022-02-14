<template>
  <h1>{{ title }}</h1>
  <p>Welcome</p>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
          <a href="#">signup now</a>
          <a href="#">more info</a>
      </template>
      <h1>Hello</h1>
      <p>Learn</p>
    </Modal>
  </div>

  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>Signup to page</h1>
      <p>Updated</p>
    </Modal>
  </div>
  <button @click="toggleModal">open modal</button>
  <button @click="toggleModalTwo">open modal 2</button>
</template>

<script>
// - creat an extra button to open a diff modal
// - use the same modal component but pass in a diff template (slot)
// - use a diff methed (e.g. toggleModalTwo) and data (e.g. showModalTwo)
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {Modal},
  data() {
    return {
      title: 'Hello this is my Vue App 🙄:)',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal (){
      this.showModal = !this.showModal
    },
    toggleModalTwo (){
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
