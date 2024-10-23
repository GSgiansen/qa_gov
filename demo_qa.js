const { chromium } = require('playwright');
const path = require('path');

async function submit_one () {
  console.log('Starting the browser for data 1');
  // Launch a browser instance
  const browser = await chromium.launch({ headless: false }); // Set headless: true to run without UI
  const page = await browser.newPage();
  
  // Navigate to a website
  await page.goto('https://demoqa.com/automation-practice-form', { timeout: 60000 });

  // load data 1 
  await page.fill('input[id="firstName"]', 'John');
  await page.fill('input[id="lastName"]', 'Doe');
  await page.fill('input[id="userEmail"]', 'john.doe@example.com');

  await page.fill('input[id="userNumber"]', '1234567890');

  await page.click('label[for="gender-radio-1"]');

  await page.click('input[id="dateOfBirthInput"]');
  await page.click('.react-datepicker__day--007')


  await page.fill('.subjects-auto-complete__input input', 'Maths');
  await page.locator('.subjects-auto-complete__option >> text=Maths').click();

  await page.getByText('Sports').click();
  await page.getByText('Music').click();
  


  await page.setInputFiles('#uploadPicture', path.join(__dirname, 'dog.png'));


  // need to check if address exists ?
  await page.fill('#currentAddress', '123 Test Street, Test City');


  await page.click("#state");
  await page.locator('.css-26l3qy-menu >> text=NCR',{ exact: true }).click()

  await page.click("#city");
  await page.locator('.css-26l3qy-menu >> text=Delhi',{ exact: true }).click()

  await page.click('#submit');
  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'checkSubmission1.png' });
  // Close the browser
  await browser.close();


  console.log('Successfully Submitted data 1');  
};


async function submit_two () {
    console.log('Starting the browser for data 2');
    // Launch a browser instance
    const browser = await chromium.launch({ headless: false }); // Set headless: true to run without UI
    const page = await browser.newPage();
    
    // Navigate to a website
    await page.goto('https://demoqa.com/automation-practice-form', { timeout: 60000 });

    // load data 2 
    await page.fill('input[id="firstName"]', 'Jane');
    await page.fill('input[id="lastName"]', 'Smith');
    await page.fill('input[id="userEmail"]', 'jane.smith@example.com');

    await page.click('label[for="gender-radio-2"]');

    await page.fill('input[id="userNumber"]', '9876543210');

    await page.click('input[id="dateOfBirthInput"]');
    await page.click('.react-datepicker__day--008')
  
  
    await page.fill('.subjects-auto-complete__input input', 'English');
    await page.locator('.subjects-auto-complete__option >> text=English').click();
  
    await page.getByText('Reading').click();
    // await page.getByText('Travelling').click();
    
  
  
    await page.setInputFiles('#uploadPicture', path.join(__dirname, 'frog.png'));
  
  
    await page.fill('#currentAddress', '456 Sample Avenue, Sample City');
  
  
    await page.click("#state");
    await page.locator('.css-26l3qy-menu >> text=Uttar Pradesh',{ exact: true }).click()
  
    await page.click("#city");
    await page.locator('.css-26l3qy-menu >> text=LuckNow',{ exact: true }).click()
  
    await page.click('#submit');
    await page.waitForTimeout(2000);
  
    await page.screenshot({ path: 'checkSubmission2.png' });
    // Close the browser
    await browser.close();
  
  
    console.log('Browser closed');
  }

(async () => {
await submit_one()
await submit_two()
})()
