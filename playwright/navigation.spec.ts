
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page.getByRole('heading', { name: 'Rodrigo Souza' })).toBeVisible();
});

test('navigation to projects section', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Ver Projetos' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/#projects/);
});

test('navigation to project details page', async ({ page }) => {
	await page.goto('/');

	// Click the project link.
	await page
		.locator('div.group')
		.filter({ has: page.getByRole('heading', { name: 'Cestou - Compras Inteligentes' }) })
		.getByRole('link')
		.click();

	// Expects the project title to be visible, which confirms navigation happened.
	await expect(page.getByRole('heading', { name: 'Cestou - Assistente de Compras Inteligente' })).toBeVisible();

	// Expects the URL to be the project details page.
	await expect(page).toHaveURL('/projects/cestou-mobile');
});
