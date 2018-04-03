<template>
  <div class="hello">
    <h1  >{{ msg }}</h1>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    binaryTree () {
      var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
      }
      var root = null

      var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
          if (node.left == null) {
            node.left = newNode
          } else {
            insertNode(node.left, newNode)
          }
        } else {
          if (node.right == null) {
            node.right = newNode
          } else {
            insertNode(node.right, newNode)
          }
        }
      }
      this.insert = function (key) {
        var newNode = new Node(key)
        if (root == null) {
          root = newNode
        } else {
          insertNode(root, newNode)
        }
      }
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
