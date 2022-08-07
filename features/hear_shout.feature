Feature: Hear shout

  Shouty allows users to "hear" other users "shouts" as long as they are close enough to each other.

Rule: Shouts can by heard by other users that are close enough to the one that shouted.

  Scenario: Listener 👂🏾 is within range
    Given Lucy is located 15 meters from Sean
    When Sean shouts, "Free 🥯s at Sean's!"
    Then Lucy hears Sean's message

    Scenario: Listener 👂🏾 is outside range
      Given Lucy is located 25 meters from Sean
      When Sean shouts, "1/2 Price ☕ at Sean's!"
      Then Lucy does not hear Sean's message
