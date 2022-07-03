import { defineParameterType } from "@cucumber/cucumber";
import Person from "../../app/models/Person.js";

defineParameterType({
  name: "person",
  regexp: /Lucy|Sean/,
  transformer(name) {
    return new Person(name);
  },
});
