import { test, expect } from '@playwright/test';

test('Can I order Pizza?', async ({ page }) => {
  // Load page
  await page.goto( process.env.URL );
  // Click
  await page.locator(process.env.BUTTONSELECTOR).click();
  // Check text
  await expect(page.locator(process.env.SOLDOUTSELECTOR).getByText(process.env.CONTENT)).toBeVisible();
});
