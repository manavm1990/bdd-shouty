import { defineParameterType } from "@cucumber/cucumber";
import Person from "../../app/models/Person.js";

defineParameterType({
  name: "listener",
  regexp: /[a-zA-Z]+/,
  type: Person,
  transformer(name) {
    return new Person(name);
  },
});

defineParameterType({
  name: "shouter",
  regexp: /[a-zA-Z]+/,
  type: Person,
  transformer(name) {
    return new Person(name);
  },
});
