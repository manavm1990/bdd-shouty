import { defineParameterType } from "@cucumber/cucumber";
import Person from "../../app/models/Person.js";

defineParameterType({
  name: "listener",
  regexp: /Lucy|Sean/,
  transformer(name) {
    return new Person(name);
  },
});

defineParameterType({
  name: "shouter",
  regexp: /Lucy|Sean/,
  transformer(name) {
    return new Person(name);
  },
});
