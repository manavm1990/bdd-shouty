import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "chai";
import Person from "../../app/models/Person.js";

Given(
  "{listener} is located/standing {int} meter(s) from {shouter}",
  function (_, distance, __) {
    this.lucy = new Person();
    this.sean = new Person();
    this.lucy.moveTo(distance);
  }
);

When("{shouter} shouts, {string}", function (_, message) {
  this.sean.shout(message);
  this.message = message;
  this.lucy.hear(message);
});

Then("{listener} hears {shouter}'s message", function (_, __) {
  expect(this.lucy.messages).to.include(this.message);
});
