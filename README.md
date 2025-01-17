This repository contains three main projects:

1. **Automated Testing for a Web Form using Playwright**
2. **Calculator with tests**
3. **Appliances Unit Consumption and Cost**

---

## 1. Automated Testing for Web Form using Playwright

This project automates the web form at Selenium Web Form using Playwright.

## Features

1. **Automatically fills out and submits the form.**
2. **Utilizes Playwright to run automated browser tests.**

Ensure you have Playwright installed globally or in your project:

```bash
npm install playwright
```

```bash
npx playwright test tests/automation.spec.js
```

## 2. Calculator Project with Unit Tests

The **Calculator** project is a simple implementation of a calculator with core functionalities:

- Addition
- Subtraction
- Multiplication
- Division

### Features

- Each method is covered by unit tests to validate the functionality.

```bash
npx playwright test tests/calculator.spec.js

```

### 3. Appliances Unit Consumption and Cost

The Appliances project allows you to calculate the power consumption and the cost for each appliance based on usage and unit cost of electricity.

## Features

1. **Add appliances with their power consumption and usage details.**
2. **Calculate monthly unit consumption for each appliance.**
3. **Calculate total monthly consumption and cost.**

### How to run the Project

1. Navigate to the `appliances` directory.
2. Ensure you have **Node.js** installed.
3. Run the appliances by typing:

```bash
  cd appliances
```

```bash
node main.js
```
#   a s s i g n m e n t  
 