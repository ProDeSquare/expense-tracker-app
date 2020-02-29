<template>
  <div class="bg-white my-6 shadow-sm flex flex-row rounded-lg">
    <div class="flex-1 p-6">
      <h5 class="text-lg">Income</h5>
      <p class="text-green-500 text-xl">
        <MoneyFormatter :amount="income" />
      </p>
    </div>

    <div class="border"></div>

    <div class="flex-1 p-6">
      <h5 class="text-lg">Expenses</h5>
      <p class="text-red-500 text-xl">
        <MoneyFormatter :amount="expense" />
      </p>
    </div>
  </div>
</template>

<script>
import MoneyFormatter from "./utlis/MoneyFormatter";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      income: "income",
      expense: "expense"
    })
  },
  components: {
    MoneyFormatter
  }
};
</script>

<style>
</style>