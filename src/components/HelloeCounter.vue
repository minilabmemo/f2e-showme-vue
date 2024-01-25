<template>
  <div>
    <div v-if="!timerStarted">
      <label for="minutes">輸入倒數分鐘：</label>
      <input type="number" id="minutes" v-model="countdownMinutes" />
      <button @click="startTimer">開始倒數</button>
    </div>

    <div v-else>
      <p>剩餘時間：{{ formatTime() }}</p>
      <button @click="stopTimer">停止倒數</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onBeforeUnmount } from "vue";

const countdownMinutes = ref(50);
const timerStarted = ref(false);
let remainingSeconds = ref(countdownMinutes.value * 60);

let timer;

const startTimer = () => {
  timerStarted.value = true;
  if (!timer) {
    timer = setInterval(() => {
      if (remainingSeconds.value > 0) {
        remainingSeconds.value--;
      } else {
        clearInterval(timer);
        timer = null;
        timerStarted.value = false;
      }
    }, 1000);
  }
};

const stopTimer = () => {
  clearInterval(timer);
  timer = null;
  timerStarted.value = false;
  remainingSeconds.value = countdownMinutes.value * 60; // 重置 remainingSeconds
};

const formatTime = () => {
  let seconds = remainingSeconds.value;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
};

onBeforeUnmount(() => {
  stopTimer();
});

watch(countdownMinutes, (newValue) => {
  if (newValue < 0) {
    countdownMinutes.value = 0;
  }
});
</script>
