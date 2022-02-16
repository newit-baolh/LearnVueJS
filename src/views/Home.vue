<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts = "posts"/>
  </div>
</template>

<script>
import {ref} from '@vue/runtime-core';
import PostList from '../components/PostList.vue'
export default {
  name: 'Home',
  components: {
    PostList
  },
  setup(){
    const posts = ref([
      {title: 'blog 1',body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At tempora eos voluptate maxime a laborum atque commodi debitis cum explicabo voluptas consectetur, quis aut ad neque illo sit pariatur dicta maiores. Porro obcaecati totam unde quidem nesciunt quisquam laboriosam, voluptates et, laudantium molestiae, fuga animi adipisci atque! Corporis voluptate dolore minus animi cumque recusandae, minima atque, rem illo non mollitia iusto fugit in consequuntur, soluta quasi eius at? Velit, cupiditate minima? Numquam, dolorem earum! Dignissimos neque cupiditate ducimus expedita tempora! Accusantium amet mollitia sit doloremque vel, libero architecto quas! Non praesentium accusantium optio quidem id ducimus. Saepe tempore ad molestiae.', id: 1},
      {title: 'blog 2',body: 'menu', id: 2}
    ])
    return {posts}
  }
}
</script>
