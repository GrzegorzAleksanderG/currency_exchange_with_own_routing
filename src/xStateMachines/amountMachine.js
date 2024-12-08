import { createMachine, assign } from 'xstate';

export const amountMachine = createMachine({
  context: { 
    amount: 0,
   },
  on: {
    CHANGE_AMOUNT: {
        actions: assign({
            amount: (context) => context.amount,
        }),
      },
  },
});