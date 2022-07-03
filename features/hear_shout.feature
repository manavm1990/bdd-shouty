Feature: Hear shout
  Scenario: Listener 👂🏾 is within range
    Given Lucy is located 15 meters from Sean
    When Sean shouts, "Free 🥯s at Sean's!"
    Then Lucy hears Sean's message

    Scenario: Listener 👂🏾 hears a different message
      Given Lucy is located 15 meters from Sean
      When Sean shouts, "Free ☕!"
      Then Lucy hears Sean's message