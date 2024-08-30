import { test, expect } from "@playwright/test";

test("Personal user login flow", async ({ page }) => {
  await page.goto("http://localhost:3001/");
  expect(page.getByText("Landing Page")).toBeTruthy();
  await page.getByRole("link", { name: "Login?" }).click();
  expect(page.getByText("Login Page")).toBeTruthy();

  await page.getByRole("button", { name: "Login as Personal" }).click();
  await page.waitForTimeout(2000);
  expect(page.getByText("Recent Documents")).toBeTruthy();
  expect(page.getByRole("navigation")).toBeTruthy();

  await page.reload();
  await page.waitForTimeout(2000);
  expect(page.getByText("Recent Documents")).toBeTruthy();
  expect(page.getByRole("navigation")).toBeTruthy();

  await page.getByRole("banner").getByRole("button").click();
  await page.getByRole("button", { name: "Log out" }).click();
  await page.locator("body").press("ArrowRight");
  await page.waitForTimeout(2000);
  expect(page.getByText("Landing Page")).toBeTruthy();

  await page.goto("http://localhost:3001/dashboard");
  await page.waitForTimeout(2000);
  expect(page).toHaveURL("http://localhost:3001/login");
});
