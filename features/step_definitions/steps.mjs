import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "expect";
import Person from "../../app/models/Person.js";
import Network from "../../app/models/Network.js";

Given(
  "{listener} is located/standing {float} meter(s) from {shouter}",
  function (listener, distance, shouter) {
    this.network = new Network();
    this.listener = new Person(listener, this.network);
    this.shouter = new Person(shouter, this.network);

    this.listener.moveTo(distance);

    // Track the messages that are broadcast in the test
    this.messages = [];
  }
);

When("{shouter} shouts, {string}", function (_, message) {
  this.shouter.shout(message);

  this.messages.push(message);
});

Then("{listener} hears {shouter}'s message(s)", function (_, __) {
  const expectHelper = () => {
    expect(this.listener.messages).toEqual(this.messages);
  };

  expectHelper();
});

Then("{listener} does not hear {shouter}'s message", function (_, __) {
  const expectHelper = () => {
    expect(this.listener.messages).not.toEqual(this.messages);
  };

  expectHelper();
});
