import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  private readonly page: Page;

  // Locators
  private readonly productsTitle: Locator;
  private readonly inventoryItems: Locator;
  private readonly addToCartBackpackBtn: Locator;
  private readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsTitle = page.locator('.title'); // "Products"
    this.inventoryItems = page.locator('.inventory_item'); // product list
    this.addToCartBackpackBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  // Verify Products title visible
  async assertProductsTitleVisible(): Promise<void> {
    await expect(this.productsTitle).toHaveText('Products');
  }

  // Verify at least 1 product is visible
  async assertProductsListVisible(): Promise<void> {
    await expect(this.inventoryItems.first()).toBeVisible();
  }

  // Add backpack to cart
  async addBackpackToCart(): Promise<void> {
    await this.addToCartBackpackBtn.click();
  }

  // Open cart
  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}