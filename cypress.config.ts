import { defineConfig } from 'cypress';

export default defineConfig({
  env:{
    USERNAME:'ObiTobi64',
    PASSWORD: '19216838129ivan',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
