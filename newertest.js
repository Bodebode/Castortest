
Given(/^I am on the website$/, function () {
I.amOnPage("http://uitestingplayground.com/")
});
When(/^I click a button$/, function () {
I.click('Text Input')
});
Then(/^I see something$/, function () {
I.see('Text input');
});

