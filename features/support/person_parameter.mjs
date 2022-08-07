import { defineParameterType } from "@cucumber/cucumber";

defineParameterType({
  name: "listener",
  regexp: /[a-zA-Z]+/,
});

defineParameterType({
  name: "shouter",
  regexp: /[a-zA-Z]+/,
});
