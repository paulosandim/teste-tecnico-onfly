const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com",
    viewportWidth: 1920,
    viewportHeight: 1080
  },
});
