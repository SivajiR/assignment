class Appliance {
  constructor(name, powerRating, hoursPerDay, costPerUnit) {
    this.name = name;
    this.powerRating = powerRating;
    this.hoursPerDay = hoursPerDay;
    this.costPerUnit = costPerUnit;
  }

  dailyConsumption() {
    return (this.powerRating * this.hoursPerDay) / 1000;
  }

  monthlyConsumption() {
    return this.dailyConsumption() * 30;
  }

  monthlyCost() {
    return this.monthlyConsumption() * this.costPerUnit;
  }

  displayConsumption() {
    console.log(`${this.name}:`);
    console.log(`Daily Consumption: ${this.dailyConsumption().toFixed(2)} kWh`);
    console.log(
      `Monthly Consumption: ${this.monthlyConsumption().toFixed(2)} kWh`
    );
    console.log(`Monthly Cost: $${this.monthlyCost().toFixed(2)}`);
    console.log("--------------------------------------------");
  }
}

module.exports = Appliance;
