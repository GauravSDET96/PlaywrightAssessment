import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Login - user should land on Products page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  // Go to login page
  await loginPage.goto();

  // Login
  await loginPage.login('standard_user', 'secret_sauce');

  // Validate Products page
  await productsPage.assertProductsTitleVisible();
});
