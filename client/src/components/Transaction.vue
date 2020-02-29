<template>
  <div class="bg-white px-6 py-4 my-4 rounded-lg shadow-sm text-black flex flex-col">
    <div class="flex justify-between">
      <span
        :class="{ 'text-green-500': (transaction.amount >= 0), 'text-red-500': (transaction.amount < 0) }"
      >
        <MoneyFormatter :amount="transaction.amount" />
      </span>

      <button class="text-xl text-red-500 -mt-1" @click="deleteTransaction">&times;</button>
    </div>

    <p class="flex-1 truncate mt-3">{{ transaction.text }}</p>
  </div>
</template>

<script>
import MoneyFormatter from "./utlis/MoneyFormatter";
import { mapActions } from "vuex";

export default {
  props: ["transaction"],
  methods: {
    ...mapActions({
      removeTransaction: "deleteTransaction"
    }),

    deleteTransaction() {
      this.removeTransaction(this.transaction._id);
    }
  },
  components: {
    MoneyFormatter
  }
};
</script>

<style>
</style>