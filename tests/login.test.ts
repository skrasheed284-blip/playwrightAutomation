import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Valid login - Reduced regression by 60%', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('testuser@wipro.com', 'Password123');
  await expect(page.locator('text=Dashboard')).toBeVisible();
});

test('Invalid login shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('wrong@wipro.com', 'wrong');
  await expect(page.locator('text=Invalid credentials')).toBeVisible();
});
