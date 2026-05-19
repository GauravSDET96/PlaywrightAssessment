import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Products - list should be visible and add item to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  // Login first
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Verify products page and list
  await productsPage.assertProductsTitleVisible();
  await productsPage.assertProductsListVisible();

  // Add backpack to cart and validate cart badge (optional)
  await productsPage.addBackpackToCart();

  // Optional: verify cart badge shows 1
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // Take screenshot (optional)
  const timestamp = Date.now();
  await page.screenshot({
    path: `screenshots/product_${timestamp}.png`,
    fullPage: true
  });
});
