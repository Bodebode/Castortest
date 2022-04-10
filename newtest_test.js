const assert = require('assert');

Feature('newtest');

Scenario('test something', async({ I }) => {
    I.amOnPage('https://www.google.com/');
    I.waitForText('Search');
    I.see('Google');
    I.fillField('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input', 'Bode Nathaniel Iwaju Music Video youtube ');
    I.wait(1)
    I.pressKey('Enter')
    I.wait(1)
    I.see('Bode Nathaniel - Iwaju')
    I.see('Tools')
    I.see('Bode Nathaniel - Iwaju (Official Video)')
  /*  I.wait(1)
//    I.waitForElement('#tsf > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div.GeTMDd > div > div.a4bIc > inpute',10)
    pause()
 //   let imfirst = await I.grabTextFrom('.#search');
 //   assert.strictEqual('bode nathaniel iwaju youtube', imfirst);
    I.wait(3)
    I.waitForValue('Bode Nathaniel')
    I.waitForResponse()*/
});


Given(/^I am on the website$/, function () {
    I.amOnPage("http://uitestingplayground.com/")
});
When(/^I click a button$/, function () {
    I.click('Text Input')
});
Then(/^I see something$/, function () {
    I.see('Text input');
});