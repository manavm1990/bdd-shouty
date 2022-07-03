import { Given, Then, When } from "@cucumber/cucumber";
import Person from "../../app/models/Person.js";

Given("Lucy is located {int} meters from Sean", function (distance) {
  // {int} is automatically passed in from Gherkin verbiage where it mentions '15'.
  this.lucy = new Person();
  this.sean = new Person();
  this.lucy.moveTo(distance);
});

When("Sean shouts, {string}", function (message) {
  this.sean.shout(message);
});

Then(
  "Lucy hears Sean's message",
  () =>
    // Write code here that turns the phrase above into concrete actions
    "pending"
);
