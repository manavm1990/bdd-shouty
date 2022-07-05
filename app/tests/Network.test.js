import Network from "../models/Network.js";

it("broadcasts a message to all listener", () => {
  const network = new Network();
  const shout = "Free 🥯s!";

  // Create a listener with a minimal implementation
  // We want to just see that it is called with the correct argument
  const listener = { hear(_) {} };

  const spy = jest.spyOn(listener, "hear");

  network.subscribe(listener);
  network.broadcast(shout);

  expect(spy).toHaveBeenCalledWith(shout);
});
