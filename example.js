const { chromium } = require('playwright');  // or 'firefox' or 'webkit'

(async () => {
  // Launch a browser instance
  const browser = await chromium.launch({ headless: false }); // Set headless: true to run without UI
  const page = await browser.newPage();
  
  // Navigate to a website
  await page.goto('https://demoqa.com/automation-practice-form');

  // load data 1 
  await page.fill('input[id="firstName"]', 'John');
  await page.fill('input[id="lastName"]', 'Doe');
  await page.fill('input[id="userEmail"]', 'john.doe@example.com');
  await page.selectOption('input[id="gender-radio-1"]', 'Male');
  await page.fill('input[id="userNumber"]', '1234567890');
  await page.click('input[id="dateOfBirthInput"]', { clickCount: 1}); // any count
  await page.fill('input[id="subject-radio-1"]', 'Maths');



  await page.screenshot({ path: 'screenshot.png' });
  // Close the browser
  await browser.close();
})();
