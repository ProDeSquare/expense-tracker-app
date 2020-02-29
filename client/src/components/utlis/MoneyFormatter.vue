<template>
  <span>${{ formattedAmount }}</span>
</template>

<script>
export default {
  props: ["amount"],
  computed: {
    formattedAmount() {
      let amount = Math.abs(this.amount);

      amount = Number(amount.toFixed(2)).toLocaleString();

      return amount;
    }
  }
};
</script>

<style>
</style>