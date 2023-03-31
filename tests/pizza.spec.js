import { test, expect } from '@playwright/test';

test('Can I order Pizza?', async ({ page }) => {
  await page.goto( process.env.URL );

  await expect(page.getByText(process.env.CONTENT)).toBeVisible();
});
