export default class Network {
  constructor() {
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  broadcast(message) {
    this.listeners.forEach((listener) => listener.hear(message));
  }
}
