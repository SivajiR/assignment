const Appliance = require("./appliance");

class ApplianceManager {
  constructor() {
    this.appliances = [];
  }

  addAppliance(appliance) {
    this.appliances.push(appliance);
  }

  totalConsumption() {
    let total = 0;
    for (const appliance of this.appliances) {
      total += appliance.monthlyConsumption();
    }
    return total;
  }

  calculateTotalCost() {
    let total = 0;
    for (const appliance of this.appliances) {
      total += appliance.monthlyCost();
    }
    return total;
  }

  applianceDetails() {
    for (const appliance of this.appliances) {
      appliance.displayConsumption();
    }

    console.log(
      `Total Monthly Consumption: ${this.totalConsumption().toFixed(2)} kWh`
    );
    console.log(`Total Monthly Cost: $${this.calculateTotalCost().toFixed(2)}`);
  }
}

module.exports = ApplianceManager;
