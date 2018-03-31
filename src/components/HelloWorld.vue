<template>
  <div class="hello">
    <h1 @click='binaryTree' class='pointer'>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to BinaryTree'
    }
  },
  methods: {
    binaryTree () {
      console.log(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pointer:hover{
  cursor:pointer;
}
</style>
