const { chromium } = require('playwright');  // or 'firefox' or 'webkit'
const path = require('path');

(async () => {
  // Launch a browser instance
  const browser = await chromium.launch({ headless: false }); // Set headless: true to run without UI
  const page = await browser.newPage();
  
  // Navigate to a website
  await page.goto('https://demoqa.com/automation-practice-form', { timeout: 60000 });

  // load data 1 
  await page.fill('input[id="firstName"]', 'John');
  await page.fill('input[id="lastName"]', 'Doe');
  await page.fill('input[id="userEmail"]', 'john.doe@example.com');
  // await page.selectOption('input[id="gender-radio-1"]', 'Male');
  // await page.getByLabel('Male').check();
  await page.fill('input[id="userNumber"]', '1234567890');

  await page.click('label[for="gender-radio-1"]');




  await page.fill('.subjects-auto-complete__input input', 'Maths');
  await page.locator('.subjects-auto-complete__option >> text=Maths').click();


  await page.setInputFiles('#uploadPicture', path.join(__dirname, 'dog.png'));


  await page.fill('#currentAddress', 'Utown');


  await page.click("#state");
  await page.locator('.css-26l3qy-menu >> text=NCR',{ exact: true }).click()

  await page.click("#city");
  await page.locator('.css-26l3qy-menu >> text=Delhi',{ exact: true }).click()


  await page.screenshot({ path: 'screenshot2.png' });
  // Close the browser
  await browser.close();
  console.log('Browser closed');
})();
