Feature: Hear shout

  Shouty allows users to "hear" other users "shouts" as long as they are close enough to each other.

Rule: Shouts can by heard by other users that are close enough to the one that shouted.

  Scenario: Listener 👂🏾 is within range
    Given the range is 100
    And Sean is located at 0
    And Lucy is located at 50
    When Sean shouts "Let's have sex!"
    Then Lucy hears Sean's message

  Scenario: Listener 👂🏾 is outside range
    Given the range is 100
    And Sean is located at 0
    And Lucy is located at 150
    When Sean shouts "Blow me!"
    Then Lucy does not hear Sean's message
