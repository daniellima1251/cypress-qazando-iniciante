const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4irg34',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions:{
      charts: true,
      reportTitle: 'Projeto do curso de Cypress',
      reportPageTitle: 'Projeto do curso de Cypress',
    },
    //configurando uma url base
    baseUrl: "https://automationpratice.com.br/",
 //comando default para aguardar o elemento aparecer por 5s:
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
