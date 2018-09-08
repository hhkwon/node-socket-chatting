<template>
  <section class = 'container'> 
    <input type="text" v-model="username">
    <button type='button' v-on:click='enter'>입장</button>
  </section>
</template>

<script>
import socket from '~/plugins/socket.io.js'
export default {
  data () {
    return {
      username: ''
    }
  },
  method: {
    enter (event) {
      socket.emit('enter',this.username)
    }
  },
  beforeMount() {
    socket.on('enter', (result) => {
      this.$nuxt.$router.replace({ path: '/chat'})
    })
  }
}
</script>

<style>
</style>

