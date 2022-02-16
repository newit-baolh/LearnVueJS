<template>
 <div class="post">
     <h3>{{post.title}}</h3>
     <!-- <p>{{post.body}}</p> -->
     <p>{{snipet}}</p>
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