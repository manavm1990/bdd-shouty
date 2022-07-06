import Network from "./Network.js";

export default class Person {
  #messages;
  static RANGE = 15;

  constructor(name, network = new Network()) {
    this.name = name;
    this.network = network;

    // Add person to network
    this.network.subscribe(this);

    this.#messages = [];
  }

  get messages() {
    return this.#messages;
  }

  moveTo(distance) {
    this.distance = distance;
  }

  shout(newMessage) {
    this.network.broadcast(newMessage);
  }

  hear(message) {
    if (this.distance <= Person.RANGE) this.#messages.push(message);
  }
}
