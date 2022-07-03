import { Given, Then, When } from "@cucumber/cucumber";
import Person from "../../app/models/Person.js";
import { expect } from "chai";

Given(
  "{person} is located/standing {int} meter(s) from Sean",
  function (lucy, distance) {
    this.lucy = new Person();
    this.sean = new Person();
    this.lucy.moveTo(distance);
  }
);

When("Sean shouts, {string}", function (message) {
  this.sean.shout(message);
  this.message = message;
  this.lucy.hear(message);
});

Then("Lucy hears Sean's message", function () {
  expect(this.lucy.messages).to.include(this.message);
});
