import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1, // Run sequentially to avoid role conflicts during session caching
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],
  use: {
    baseURL: process.env.BASE_URL || 'https://iris.revelarautomation.com',
    extraHTTPHeaders: {
      'x-case-token': process.env.CASE_TOKEN || '6236a25ba73388af081c29d1fedcd3cfb9af659af8d369dea3faa7eb3c431fe7',
    },
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'frontend',
      testDir: './frontend/tests',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'backend',
      testDir: './backend/tests',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
