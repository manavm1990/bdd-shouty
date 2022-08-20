export default class Network {
  #listeners;

  constructor(range = 15) {
    this.range = range;

    this.#listeners = [];
  }

  subscribe(listener) {
    this.#listeners.push(listener);
  }

  broadcast(message) {
    this.#listeners.forEach((listener) => listener.hear(message));
  }
}
