
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('should show the tech stack section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Tech Stack' })).toBeVisible();
});

test('should show the featured projects section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Projetos em Destaque' })).toBeVisible();
});
