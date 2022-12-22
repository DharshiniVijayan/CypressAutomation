Feature: Add new offering

    Scenario: Submit the form without entering the mandatory field
        Given User is in login page
        When User enter user name
        And User enter password
        And User clicks on the login button
        Given User clicks on protfolio module
        When User clicks add new offering
        And User clicks on next without entering mandatory field
        Then Validation message appears


    Scenario: Form reset upon clicking add new offering
        Given User is in login page
        When User enter user name
        And User enter password
        And User clicks on the login button
        Given User clicks on protfolio module
        When User clicks add new offering
        And User clicks on next without entering mandatory field
        Then Validation message appears
        When User enter data in input name field
        And User select selects offering type drop down
        And User closes the add new offering form
        When User clicks add new offering
        Then Display new offering form

    Scenario:  Placeholder is available in all input field
        Given User is in login page
        When User enter user name
        And User enter password
        And User clicks on the login button
        Given User clicks on protfolio module
        When User clicks add new offering
        Then Placeholder available in all input field

    Scenario: Multiple selecter can be done in select visibility box
        Given User is in login page
        When User enter user name
        And User enter password
        And User clicks on the login button
        Given User clicks on protfolio module
        When User clicks add new offering
        Then User selects more than one option in select visibility drop down
