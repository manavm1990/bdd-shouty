import Person from "../models/Person";

describe("Person", () => {
  let network;
  let subscribeSpy;
  let broadcastSpy;

  beforeEach(() => {
    network = {
      subscribe() {},
      broadcast() {},
    };

    subscribeSpy = jest.spyOn(network, "subscribe");
    broadcastSpy = jest.spyOn(network, "broadcast");
  });

  it("subscribes to the network", () => {
    const person = new Person("John", network);

    expect(subscribeSpy).toHaveBeenCalledWith(person);
  });

  it("broadcasts a message to the network", () => {
    const person = new Person("John", network);
    const message = "Free 🥯s!";

    person.shout(message);

    expect(broadcastSpy).toHaveBeenCalledWith(message);
  });

});
