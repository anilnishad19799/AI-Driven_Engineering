// ./test-template.js

const { test, expect } = require('@playwright/test');

test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the application
    await page.goto(process.env.BASE_URL || 'http://localhost:3000');
  });

  test('should complete the user flow successfully', async ({ page }) => {
    // Arrange
    await expect(page).toHaveTitle(/.+/);

    // Act
    // Example interactions:
    // await page.getByRole('button', { name: 'Sign In' }).click();
    // await page.getByLabel('Email').fill('user@example.com');
    // await page.getByLabel('Password').fill('password');
    // await page.getByRole('button', { name: 'Submit' }).click();

    // Assert
    // await expect(page.getByText('Welcome')).toBeVisible();
  });

  test.afterEach(async ({ page }, testInfo) => {
    // Capture screenshot on failure
    if (testInfo.status !== testInfo.expectedStatus) {
      await page.screenshot({
        path: `test-results/${testInfo.title.replace(/\s+/g, '-')}.png`,
        fullPage: true,
      });
    }
  });
});