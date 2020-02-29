<template>
  <div class="text-white">
    <h3 class="text-xl">Your Transactions</h3>

    <div v-for="transaction in transactions" :key="transaction._id">
      <Transaction :transaction="transaction" />
    </div>
  </div>
</template>

<script>
import Transaction from "./Transaction";
import { mapGetters } from "vuex";

export default {
  methods: {
    //
  },
  computed: {
    ...mapGetters({
      transactions: "transactions"
    })
  },
  components: {
    Transaction
  }
};
</script>

<style>
</style>