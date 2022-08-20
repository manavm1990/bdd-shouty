import { defineParameterType } from "@cucumber/cucumber";

const names = ["person", "listener", "shouter"];

names.forEach((name) => {
  defineParameterType({
    name, // name of the parameter type
    regexp: /[a-zA-Z]+/, // regular expression to match the parameter
  });
});
