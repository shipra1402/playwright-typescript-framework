  import { test, expect } from '@playwright/test';
  test('Add multiple todo items @sanity', async ({ page }) => {

  await page.goto('https://todomvc.com/examples/react/dist/');

  const todoInput = page.getByTestId('text-input');

  await todoInput.fill('Buy grocery');
  await todoInput.press('Enter');

  await todoInput.fill('Go for walk');
  await todoInput.press('Enter');

  await todoInput.fill('Rest');
  await todoInput.press('Enter');

  await todoInput.fill('Play');
  await todoInput.press('Enter');

  await expect(page.locator('.todo-list li')).toHaveCount(2);

});