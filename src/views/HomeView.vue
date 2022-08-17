<template>
  <div>
    <h1>{{counterStore.counter}}</h1>
    <button @click="counterStore.decrement">-</button>
    <button @click="counterStore.increment">+</button>
    <p>`The count is {{counterStore.oddOrEven}}`</p>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import {useCounterStore} from '../stores/counter'

const counterStore = useCounterStore()

const count = ref(0)

const increment = () => {
  count.value++
};

const decrement = () => {
  count.value--
};

const oddOrEven = computed(() => {
  if(count.value % 2 === 0)
  return "even";
  return "odd"
})



</script>