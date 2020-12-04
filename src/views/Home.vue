<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Todo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/hello-world/HelloWorld";
import Todo from "@/components/todo/Todo";

@Component({
  components: {
    HelloWorld,
    Todo
  }
})
export default class Home extends Vue {}
</script>
