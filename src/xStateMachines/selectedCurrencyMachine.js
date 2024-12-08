import { createMachine, assign } from 'xstate';

export const selectedCurrencyMachine = createMachine({
  context: { 
    selectedCurrency: "USD",
   },
  on: {
    CHANGE_CURRENCY: {
        actions: assign({
            selectedCurrency: (context) => context.selectedCurrency,
        }),
      },
  },
});