Feature: Hear shout

  Shouty allows users to "hear" other users "shouts" as long as they are close enough to each other.

Rule: Shouts can by heard by other users that are close enough to the one that shouted.

  Scenario: Listener 👂🏾 is within range
    Given the range is 100
    And Sean is located at 0
    And Lucy is located at 50
    When Sean shouts:
      | Hello      |
      | You fool   |
      | I love you |
    Then Lucy hears Sean's shouts

  Scenario: Listener 👂🏾 is outside range
    Given the range is 100
    And Sean is located at 0
    And Lucy is located at 150
    When Sean shouts
    Then Lucy does not hear Sean's shout

Rule: Messages must be less than 180 characters long, or they will not be heard regardless of distance/ranges.

  Scenario: Message is too long
    Given the range is 100
    And Sean is located at 0
    And Lucy is located at 50
    When Sean shouts,
      """
      This is a really long message
      so long in fact that I am not going to
      be allowed to send it, at least if I keep
      typing like this until the length is over
      the limit of 180 characters.
      """
    Then Lucy does not hear Sean's shout
      And an error message that includes the words 'message is too long' is received