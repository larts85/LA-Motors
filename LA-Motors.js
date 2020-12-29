/* <<<<<< Consesionaria LA Motors presenta >>>>>> */

// Declaring classes
class Vehicle {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = this.formatCurrency(price);
  }
  formatCurrency(amount) {
    let $ = `${amount}`;
    let money = "$" + $.replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, "$1.");
    var decimals = money.split(".")[2];
    return decimals && decimals.length < 2
      ? `${money.slice(0, -2)},${decimals}0`
      : decimals && decimals.length === 2
      ? `${money.slice(0, -3)},${decimals}`
      : money + ",00";
  }
}

class Car extends Vehicle {
  constructor(brand, model, doors, price) {
    super(brand, model, price);
    this.doors = doors;
  }
}
class Bike extends Vehicle {
  constructor(brand, model, displacement, price) {
    super(brand, model, price);
    this.displacement = displacement;
  }
}

// Making the intances
const vehicles = [
  new Car("Peugeot", "206", 4, 200000),
  new Bike("Honda", "Titan", "125cc", 60000),
  new Car("Peugeot", "208", 5, 250000),
  new Bike("Yamaha", "YBR", "160cc", 80500.5),
];

// Print all data vehicles
const stringifyVehicles = (vehicles) => {
  for (let i = 0; i < vehicles.length; i++) {
    console.log(
      `Marca: ${vehicles[i].brand} // Modelo: ${vehicles[i].model} // ${
        vehicles[i].doors
          ? "Puertas: " + vehicles[i].doors
          : "Cilindrada: " + vehicles[i].displacement
      } // Precio: ${vehicles[i].price}`
    );
  }
};

// Sort Vehicles by price from highest to lowest
const sortByPriceHighestToLowest = (vehicles) => {
  const sortedVehicles = vehicles.sort(function (v1, v2) {
    var a = v1.price.slice(1).replace(".", "").replace(",", ".");
    var b = v2.price.slice(1).replace(".", "").replace(",", ".");
    if (parseInt(a) > parseInt(b)) {
      return -1;
    }
    if (parseInt(a) < parseInt(b)) {
      return 1;
    }
    return 0;
  });
  return sortedVehicles;
};
// Find Vehicle(s) by letter
const findOneOrMoreVehiclesWithLetter = (letter, vehicles) => {
  const matchedVehicles = vehicles.filter((vehicle) =>
    vehicle.model.includes(letter)
  );
  let msg = `Vehículos que contienen en el modelo la letra ‘${letter}’:\n`;
  for (let i = 0; i < matchedVehicles.length; i++) {
    if (matchedVehicles.length === 1) {
      console.log(
        `Vehículo que contiene en el modelo la letra ‘${letter}’: ${matchedVehicles[0].brand} ${matchedVehicles[0].model} ${matchedVehicles[0].price}`
      );
      return;
    } else {
      msg += `${matchedVehicles[i].brand} ${matchedVehicles[i].model} ${matchedVehicles[i].price}\n`;
    }
  }
  console.log(msg);
};

/* =============================== PRINT ZONE ============================== */
stringifyVehicles(vehicles);
console.log("=============================");
console.log(
  `Vehículo más caro: ${sortByPriceHighestToLowest(vehicles)[0].brand} ${
    sortByPriceHighestToLowest(vehicles)[0].model
  }`
);
console.log(
  `Vehículo más barato: ${
    sortByPriceHighestToLowest(vehicles)[
      sortByPriceHighestToLowest(vehicles).length - 1
    ].brand
  } ${
    sortByPriceHighestToLowest(vehicles)[
      sortByPriceHighestToLowest(vehicles).length - 1
    ].model
  }`
);
findOneOrMoreVehiclesWithLetter("Y", vehicles);
console.log("=============================");
console.log("Vehículos ordenados por precio de mayor a menor:");
sortByPriceHighestToLowest(vehicles)
  .map(({ brand, model }) => brand + " " + model)
  .map((value) => console.log(value));
