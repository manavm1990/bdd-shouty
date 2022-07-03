import { Given, Then, When } from "@cucumber/cucumber";

Given("Lucy is located {int} meters from Sean", (distance) => {
  // {int} is automatically passed in from Gherkin verbiage where it mentions '15'.
  console.log(distance);

  // Given('Lucy is located {float} meters from Sean', function (float) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When(
  "Sean shouts, {string}",
  (string) =>
    // Write code here that turns the phrase above into concrete actions
    "pending"
);

Then(
  "Lucy hears Sean's message",
  () =>
    // Write code here that turns the phrase above into concrete actions
    "pending"
);
