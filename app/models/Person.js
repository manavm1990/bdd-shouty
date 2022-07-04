export default class Person {
  #messages;
  static RANGE = 15;

  constructor(name) {
    this.name = name;
    this.#messages = [];
  }

  get messages() {
    return this.#messages;
  }

  moveTo(distance) {
    this.distance = distance;
  }

  shout(newMessage) {
    this.#messages.push(newMessage);
  }

  hear(message) {
    if (this.distance <= Person.RANGE) this.#messages.push(message);
  }
}
