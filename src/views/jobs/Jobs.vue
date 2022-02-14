<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
      <h2>{{job.title}}</h2>
  </div>
</template>

<script>
export default {
data(){
    return {
        jobs: [
            {title: 'Ni',id: 1, details: 'poo'},
            {title: 'Bi',id: 2, details: 'pee'},
            {title: 'Ty',id: 3, details: 'nee'},
        ]
    }
}
}
</script>

<style>

</style>