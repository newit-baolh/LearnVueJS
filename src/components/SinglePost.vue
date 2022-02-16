<template>
 <div class="post">
     <router-link :to="{name: 'Details', params: {id: post.id}}">
         <h3>{{post.title}}</h3>
    </router-link>
     
     <!-- <p>{{post.body}}</p> -->
     <p>{{snipet}}</p>
     <span v-for="tag in post.tag" :key="tag">#{{tag}}</span>
     </div> 
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ['post'],
    setup(props){
        const snipet = computed(()=>{
            return props.post.body.substring(0,100) + '...'
        })
        return {snipet}
    }
}
</script>

<style>

</style>