import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: null,
    balance: 0,
    income: 0,
    expense: 0,
  },

  mutations: {

    SET_TRANSACTIONS(state, data) {
      state.transactions = data;
    },

    PUSH_TRANSACTION(state, data) {
      state.transactions.unshift(data);
    },

    SET_BALANCE(state, data) {
      state.balance = data;
    },

    SET_INCOME(state, data) {
      state.income = data;
    },

    SET_EXPENSE(state, data) {
      state.expense = data;
    },

  },

  getters: {

    transactions(state) {
      return state.transactions
    },

    totalBalance(state) {
      return state.balance
    },

    income(state) {
      return state.income
    },

    expense(state) {
      return state.expense
    }

  },

  actions: {

    async createTransaction({ commit, dispatch }, data) {
      let response = await axios.post('/api/v1/transactions', data);

      commit('PUSH_TRANSACTION', response.data.data);
      dispatch('getTransactionsTotal', this.state.transactions);
    },

    async getTransactions({ commit, dispatch }) {
      let transactions = await axios.get('/api/v1/transactions');

      commit('SET_TRANSACTIONS', transactions.data.data);
      return dispatch('getTransactionsTotal', transactions.data.data);
    },

    async deleteTransaction({ dispatch }, transaction) {
      let response = await axios.delete(`/api/v1/transactions/${transaction}`);

      if (!response) return;

      return dispatch('getTransactions');
    },

    getTransactionsTotal({ commit, dispatch }, transactions) {
      let total = 0;

      transactions.forEach(transaction => {
        total += transaction.amount;
      });

      commit('SET_BALANCE', total);
      return dispatch('getTotalIncome', transactions);
    },

    getTotalIncome({ commit, dispatch }, transactions) {
      let total = 0;

      transactions.forEach(transaction => {
        if (transaction.amount > 0) {
          total += transaction.amount;
        }
      });

      commit('SET_INCOME', total);
      return dispatch('getTotalExpense', transactions);
    },

    getTotalExpense({ commit }, transactions) {
      let total = 0;

      transactions.forEach(transaction => {
        if (transaction.amount < 0) {
          total += transaction.amount;
        }
      });

      commit('SET_EXPENSE', total);
    }

  },

  modules: {
    //
  }

})
