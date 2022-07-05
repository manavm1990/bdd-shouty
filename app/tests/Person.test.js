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
});
