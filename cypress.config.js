const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    token: "",
    postID: "",
    time: "",
    status: "",
    msg: "",
    email: "905128kogskl@mail.com",
    pass: "123123",
    regEmail: ""
  },
  projectId: 'ii65as',
  e2e: {
    baseUrl: 'https://altashop-api.fly.dev/api',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature"
  },
});
