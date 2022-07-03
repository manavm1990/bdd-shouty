export default class {
  #messages;

  constructor(name) {
    this.name = name;
    this.#messages = [];
  }

  get messages() {
    return this.#messages;
  }

  moveTo() {}
  shout(newMessage) {
    this.#messages.push(newMessage);
  }

  hear(message) {
    this.#messages.push(message);
  }
}
