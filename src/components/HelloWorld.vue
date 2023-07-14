<script setup lang="ts">
import { reactive } from "vue";

defineProps<{ msg: string }>();

// const loading = ref(false);
// function onClick(e: Event) {
//   console.log("click", e);
// }
const xAxis = reactive({
  type: "category",
  data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
});
const yAxis = reactive({
  type: "value",
});

const SeriesConfig = reactive([
  {
    data: [150, 230, 224, 218, 135, 147, 260],
    type: "line",
  },
]);
</script>

<template>
  <!-- button组件：<Button class="mr30" :loading="loading" @click="onClick">
    Default Button
  </Button> -->
  <!-- <Button> Default Button</Button> -->

  <LineChart
    :xAxis="xAxis"
    :yAxis="yAxis"
    :series="SeriesConfig"
    style="width: 800px; height: 600px"
  ></LineChart>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
