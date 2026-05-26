const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // --- TEST LOGIN ---
  await page.goto('http://localhost:3000/login');
  await page.waitForSelector('button[type="submit"]');

  const loginBtnBefore = await page.$eval('button[type="submit"]', b => ({ text: b.textContent.trim(), disabled: b.disabled }));
  console.log('LOGIN - antes de clicar:', loginBtnBefore);

  await page.fill('input[type="text"]', 'test@test.com');
  await page.fill('input[type="password"]', 'senha123');

  await page.route('**/tokens', async route => {
    await new Promise(r => setTimeout(r, 1500));
    await route.abort();
  });

  page.click('button[type="submit"]');
  await page.waitForTimeout(300);

  const loginBtnDuring = await page.$eval('button[type="submit"]', b => ({ text: b.textContent.trim(), disabled: b.disabled }));
  console.log('LOGIN - durante requisição:', loginBtnDuring);

  await page.waitForTimeout(1500);
  const loginBtnAfter = await page.$eval('button[type="submit"]', b => ({ text: b.textContent.trim(), disabled: b.disabled }));
  console.log('LOGIN - após requisição:', loginBtnAfter);

  // --- TEST REGISTER ---
  await page.goto('http://localhost:3000/register');
  await page.waitForSelector('button[type="submit"]');

  const regBtnBefore = await page.$eval('button[type="submit"]', b => ({ text: b.textContent.trim(), disabled: b.disabled }));
  console.log('REGISTER - antes de clicar:', regBtnBefore);

  await page.fill('input[type="text"]', 'Teste Usuario');
  await page.fill('input[type="email"]', 'test@test.com');
  await page.fill('input[type="password"]', 'senha123');

  await page.route('**/users/**', async route => {
    await new Promise(r => setTimeout(r, 1500));
    await route.abort();
  });

  page.click('button[type="submit"]');
  await page.waitForTimeout(300);

  const regBtnDuring = await page.$eval('button[type="submit"]', b => ({ text: b.textContent.trim(), disabled: b.disabled }));
  console.log('REGISTER - durante requisição:', regBtnDuring);

  await page.waitForTimeout(1500);
  const regBtnAfter = await page.$eval('button[type="submit"]', b => ({ text: b.textContent.trim(), disabled: b.disabled }));
  console.log('REGISTER - após requisição (erro/abort):', regBtnAfter);

  await browser.close();
})();
