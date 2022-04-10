
Given(/^I am on a website$/, function () {
    I.amOnPage("http://uitestingplayground.com/")
});
When(/^I click a buttons$/, function () {
    I.click('Text Input')
});
Then(/^I see somethings$/, function () {
    I.see('Text input');
});
