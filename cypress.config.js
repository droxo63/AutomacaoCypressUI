const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

module.exports = {

  e2e: {
 
   viewportWidth: 1280,
 
   viewportHeight: 720
 
  }
 
 }
