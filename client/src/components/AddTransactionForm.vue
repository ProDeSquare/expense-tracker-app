<template>
  <div class="my-6 text-white">
    <h3 class="text-xl">Add a new Transaction</h3>

    <form class="mt-4" @submit.prevent="addTransaction">
      <div>
        <input
          type="text"
          name="amount"
          class="text-black px-6 py-4 w-full"
          placeholder="Enter Amount"
          v-model="form.amount"
          autocomplete="off"
          required
        />

        <input
          type="text"
          name="text"
          class="text-black px-6 py-4 w-full"
          placeholder="Title for transaction"
          v-model="form.text"
          autocomplete="off"
          required
        />
      </div>

      <p class="mt-2">For withdrawal input "-amount".</p>

      <button type="submit" id="add-transaction" class="rounded-lg w-full my-4 p-4 text-lg">Confirm</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {}
    };
  },
  methods: {
    ...mapActions({
      createTransaction: "createTransaction"
    }),

    addTransaction() {
      this.createTransaction(this.form).then((this.form = {}));
    }
  }
};
</script>

<style>
input {
  border-bottom: 1px solid rgba(0, 0, 0, 0.0987);
}

input:nth-child(1) {
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
}

input:last-child {
  border-bottom-left-radius: 0.7rem;
  border-bottom-right-radius: 0.7rem;
  border-bottom: none;
}

#add-transaction {
  background: linear-gradient(to right, #ee0979, #ff6a00);
  border: 3px solid rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

#add-transaction:hover {
  background: linear-gradient(to left, #ee0979, #ff6a00);
}
</style>