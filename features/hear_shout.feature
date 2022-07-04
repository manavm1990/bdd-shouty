Feature: Hear shout
  Scenario: Listener 👂🏾 is within range and hears the shout 📢
    Given Lucy is located 15 meters from Sean
    When Sean shouts, "Free 🥯s at Sean's!"
    Then Lucy hears Sean's message

    Scenario: Listener 👂🏾 is within range and hears multiple shouts 📢
      Given Lucy is located 15 meters from Sean
      When Sean shouts, "Free ☕!"
      And Sean shouts, "1/2 price 🥯s at Sean's!"
      Then Lucy hears Sean's messages
