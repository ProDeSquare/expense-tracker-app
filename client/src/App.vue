<template>
  <div class="min-h-screen flex content-center justify-center flex-wrap" id="app">
    <div class="container">
      <div class="w-full md:w-1/3 mx-auto p-6">
        <Header />

        <div>
          <Balance />
          <IncomeExpenses />
          <Transactions />
          <AddTransactionForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpenses from "./components/IncomeExpenses.vue";
import Transactions from "./components/Transactions.vue";
import AddTransactionForm from "./components/AddTransactionForm.vue";

export default {
  name: "App",
  components: {
    Header,
    Balance,
    IncomeExpenses,
    Transactions,
    AddTransactionForm
  }
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  /* background: linear-gradient(to right, #8e2de2, #4a00e0); */
  background-color: #8e2de2;
  animation: bgAnim 3s infinite;
  transition: all 1s linear !important;
}

@keyframes bgAnim {
  0% {
    background-color: #8e2de2;
  }
  50% {
    background-color: #4a00e0;
  }
  100% {
    background-color: #8e2de2;
  }
}

.text-shadow {
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.0987);
}
</style>
