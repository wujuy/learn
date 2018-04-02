<template>
  <div class="hello">
    <h1  >{{ bag }}</h1>
    <button v-for='(fruit,i) in fruits' :key='i' :class="[i==0 ? 'orange':i==1 ? 'green':i==2 ? 'blue':'']" @click = 'binaryTree(fruit)'>{{fruit}}</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bag: 'book',
      fruits: [ 'strawberry', 'mango', 'orange' ]
    }
  },
  methods: {
    binaryTree (fruit) {
      this.bag = fruit
      console.log(this.bag)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.orange:hover{
  background:orange;
}
.blue:hover{
  background:blueviolet;
}
.green:hover{
  background:greenyellow;
}
.pointer{
  outline:0;
  border:1px solid #ddd;
}
.pointer+.pointer{
  border-left:1px solid skyblue;
}
.pointer:hover{
  cursor:pointer;
  background:pink;
}
</style>
