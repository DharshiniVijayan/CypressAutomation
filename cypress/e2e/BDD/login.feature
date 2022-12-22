Feature: Login functionality

    Scenario: Valid user login
    Given User is in login page
    When User enter user name 
    And User enter password
    And User clicks on the login button
    Then User is in home page 