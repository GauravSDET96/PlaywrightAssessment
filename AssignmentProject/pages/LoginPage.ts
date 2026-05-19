import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  // Page instance
  private readonly page: Page;

  // Locators
  private readonly userNameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  // Constructor
  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  // Navigate to SauceDemo login page
  async goto(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Enter username
  async enterUserName(username: string): Promise<void> {
    await this.userNameInput.fill(username);
  }

  // Enter password
  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  // Click login button
  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  // Complete login action in one method
  async login(username: string, password: string): Promise<void> {
    await this.enterUserName(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  // (Optional) Assertion helper: verify we are still on login page by checking login button visible
  async assertLoginPageVisible(): Promise<void> {
    await expect(this.loginButton).toBeVisible();
  }
}