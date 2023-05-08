Feature: Auth
  Scenario: POST Register
    Given user input email password and fullname
    Then server should return userID, email, password, and fullname
    And with reasonable time
    And return success status

  Scenario: POST Login
    Given user already registered
    Then user should be able to login
    And with reasonable time
    And return success status

  Scenario: GET User information
    Given user already logged in
    Then user should be able to see their information
    And with reasonable time
    And return success status



