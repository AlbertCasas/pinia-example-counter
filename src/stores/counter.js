import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    oddOrEven: (state) => {
      if(state.counter % 2 === 0)
      return "even";
      return "odd"
    }
  },
  actions: {
    increment() {
      this.counter++
    },

    decrement() {
      this.counter--
    }
  }
})
