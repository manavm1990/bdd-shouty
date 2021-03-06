import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "expect";
import Person from "../../app/models/Person.js";

Given(
  "a person named {listener} is located/standing {int} meter(s) from a person named {shouter}",
  function (_, distance, __) {
    this.lucy = new Person("Lucy");
    this.sean = new Person("Sean");

    this.lucy.moveTo(distance);

    this.messages = [];
  }
);

When("{shouter} shouts, {string}", function (_, message) {
  this.sean.shout(message);
  this.lucy.hear(message);

  this.messages.push(message);
});

Then("{listener} hears {shouter}'s message(s)", function (_, __) {
  const expectHelper = () => {
    expect(this.lucy.messages).toEqual(this.messages);
  };

  expectHelper();
});

Then("{listener} does not hear {shouter}'s message", function (_, __) {
  const expectHelper = () => {
    expect(this.lucy.messages).not.toEqual(this.messages);
  };

  expectHelper();
});
