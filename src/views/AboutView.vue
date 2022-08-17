<template>
  <div class="about">
    <button @click="counterStore.increment" class="btn">{{counterStore.counter}}</button>
  </div>
</template>

<script setup>
import {useCounterStore} from '../stores/counter'

const counterStore = useCounterStore()

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    
  }

  .btn {
    background-color: white;
    border: none;
    font-size: 20px;
  }
}
</style>
