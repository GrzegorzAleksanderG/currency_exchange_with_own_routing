import { createMachine, assign } from 'xstate';

export const languageMachine = createMachine({
  context: { 
    language: "en",
   },
  on: {
    CHANGE_LANGUAGE: {
        actions: assign({
          language: (context) => context.language,
        }),
      },
  },
});

