console.log('js!!');

class Pizza {
    constructor(toppingsInput) {
        this.toppings = ['cheese'];
        for (let topping of toppingsInput) {
            this.toppings.push(topping);
        }
    }

    cost() {
        let totalCost = 9.01;
        for (let topping of this.toppings) {
            totalCost += .99;
        }
        return totalCost;
    }
}

class Order {
    constructor(pizzaList) {
        this.pizzaList = pizzaList;
    }

    totalOrderCost() {
        let orderTotal = 0;
        for (let pizza of this.pizzaList) {
            orderTotal += pizza.cost();
        }
        return (orderTotal).toFixed(2);
    }
}

let worldPizza = new Pizza(['dirt', 'clouds']);
let vacuumPizza = new Pizza(['space', 'black hole', 'antimatter', 'big data']);
let grossPizza = new Pizza(['cherries', 'lobster meat', 'spaghetti', 'hamsters','plastic wrap']);

console.log(worldPizza, vacuumPizza, grossPizza);
console.log(vacuumPizza.cost());

let pizzaOrder = new Order([worldPizza, vacuumPizza, grossPizza]);
console.log(pizzaOrder);

let pizzaOrderTotalOrderCost = pizzaOrder.totalOrderCost();
console.log(pizzaOrderTotalOrderCost);
