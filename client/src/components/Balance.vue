<template>
  <div class="text-white">
    <h3 class="text-lg">Your Balance</h3>
    <p class="text-3xl md:text-4xl">
      <MoneyFormatter :amount="totalBalance" />
    </p>
  </div>
</template>

<script>
import MoneyFormatter from "./utlis/MoneyFormatter";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      totalBalance: "totalBalance"
    })
  },
  components: {
    MoneyFormatter
  }
};
</script>

<style>
</style>