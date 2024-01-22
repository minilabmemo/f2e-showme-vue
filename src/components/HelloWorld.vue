<template>
  <div class="hello">
    <h1 :class="titleClass">{{ msg }}</h1>
    <h1 class="text-red-500">Make me red</h1>
    <p>counter {{ counter }}</p>
    <button @click="plus">點選讓數字加一</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>
<script setup lang="ts">
import { ref } from "vue";

const titleClass = "title";
// let counter = 0;
const counter = ref(0);
const plus = () => {
  counter.value++;
  console.log(counter);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.red-text,
.title {
  color: blue;
}
</style>
