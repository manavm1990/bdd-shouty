import { Before, Given, Then, When } from "@cucumber/cucumber";
import { expect } from "expect";
import Network from "../../app/models/Network.js";
import Person from "../../app/models/Person.js";

Before(function () {
  // We only need access to one person at a time and always by name...
  this.persons = {};
});

Given("the range is {int}", function (range) {
  this.network = new Network(range);
});

Given("{person} is located/standing at {float}", function (name, position) {
  this.persons[name] = new Person({ name, network: this.network, position });
});

When("{shouter} shouts", function (name) {
  this.persons[name].shout(`Hello World! It's me, {name}!`);
});

When("{shouter} shouts, {string}", function (name, message) {
  this.persons[name].shout(message);
});

When("{shouter} shouts:", function (name, dataTable) {
  dataTable
    .raw()
    .flat()
    .forEach((message) => {
      this.persons[name].shout(message);
    });
});

Then("{listener} hears {shouter}'s shout(s)", function (listener, shouter) {
  const expectHelper = () => {
    expect(this.persons[listener].messages).toEqual(
      this.persons[shouter].shouts
    );
  };

  expectHelper();
});

Then(
  "{listener} does not hear {shouter}'s shout",
  function (listener, shouter) {
    const expectHelper = () => {
      expect(this.persons[listener].messages).not.toEqual(
        this.persons[shouter].shouts
      );
    };

    expectHelper();
  }
);
