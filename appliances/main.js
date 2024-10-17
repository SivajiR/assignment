const Appliance = require("./appliance");
const ApplianceManager = require("./applianceManager");

const manager = new ApplianceManager();

const fridge = new Appliance("Fridge", 150, 24, 0.12);
const ac = new Appliance("Air Conditioner", 2000, 8, 0.12);
const fan = new Appliance("Fan", 75, 10, 0.12);
const washingMachine = new Appliance("Washing Machine", 500, 1, 0.12);

manager.addAppliance(fridge);
manager.addAppliance(ac);
manager.addAppliance(fan);
manager.addAppliance(washingMachine);

manager.applianceDetails();
