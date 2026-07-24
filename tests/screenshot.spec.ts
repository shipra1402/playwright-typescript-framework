import { test, expect } from '@playwright/test';

test('screenshot test', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    //await page.screenshot({ path: 'screenshot/screenshot.png' });
    //await page.screenshot({ path: 'screenshot/screenshot.png', fullPage: true });
    await page.getByText("Quick Start").screenshot({ path: 'screenshot/quick-start.png' });
});