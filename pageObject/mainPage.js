const { expect } = require("@playwright/test");

exports.MainPage = class Mainpage {
  constructor(page) {
    this.page = page;
    this.selectMenu = page.locator(`[name="my-select"]`);
    this.defaulCheckBox = page.getByLabel("Default checkbox");
    this.colorPick = page.locator(`[name="my-colors"]`);
    this.range = page.locator(".form-range");
  }

  async initialValidation(text) {
    await expect(
      this.page.getByRole("heading", { name: "Web form" })
    ).toBeVisible();
    await expect(this.page.locator("form")).toContainText(text);
  }
  async updateBasicInfo(options) {
    for (const input in options) {
      let inputLocator = await this.page.locator(`[name="${input}"]`);
      await expect(inputLocator).toBeVisible();
      await expect(inputLocator).toBeEnabled();
      await expect(inputLocator).toBeEditable();
      await inputLocator.fill(options[input]);
    }
  }

  async disableReadOnlyInputAssertion() {
    await expect(this.page.locator(`[name="my-disabled"]`)).toHaveAttribute(
      "placeholder",
      "Disabled input"
    );
    await expect(this.page.locator(`[name="my-readonly"]`)).toHaveAttribute(
      "value",
      "Readonly input"
    );
  }

  async dropDownOption(select, datalist) {
    await expect(this.selectMenu).toBeVisible();
    await this.selectMenu.selectOption(select);
    await this.page.getByPlaceholder("Type to search...").fill(datalist);
  }

  async fileUpload(filePath) {
    await this.page.getByLabel("File input").click();
    await this.page.getByLabel("File input").setInputFiles(filePath);
  }

  async checkBoxRadioButtons() {
    await this.defaulCheckBox.check();
    await expect(this.defaulCheckBox).toBeChecked();

    // await page.getByLabel("Default checkbox").check();
    await this.page.getByLabel("Checked checkbox").uncheck();
    await this.page.getByLabel("Default radio").check();
    await this.page.getByLabel("Checked radio").check();
  }

  async colorPicker(chooseColor) {
    await this.colorPick.click();
    await this.colorPick.fill(chooseColor);
    await this.colorPick.click();
  }

  async dateAndRange() {
    await this.page.locator('[name="my-date"]').click();
    await this.page.getByRole("cell", { name: "31" }).click();

    await this.range.fill("8");
    await this.range.fill("9");
  }
};
