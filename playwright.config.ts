import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

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
    baseURL: process.env.BASE_URL || '',
    extraHTTPHeaders: {
      'x-case-token': process.env.CASE_TOKEN || '',
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
