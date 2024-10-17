import { test, expect } from "@playwright/test";
const { MainPage } = require("../pageObject/mainPage");
const inputData = require("../testData/input.json");

test("test", async ({ page }) => {
  const mainPage = new MainPage(page);
  await page.goto("https://www.selenium.dev/selenium/web/web-form.html");

  await mainPage.initialValidation("Text input");

  await mainPage.updateBasicInfo(inputData.InputFields);

  await mainPage.disableReadOnlyInputAssertion();

  await mainPage.dropDownOption("3", "New York");

  await mainPage.fileUpload("file1.pdf");

  await mainPage.checkBoxRadioButtons();

  await mainPage.colorPicker("#66659f");
});
