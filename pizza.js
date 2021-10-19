function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni","sausage"]) ;
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]) ;
var p3 = pizzaOven("thin-crust", "white", ["white-cheddar", "ricotta"], ["sausage", "bell peppers", "onions"])
var p4 = pizzaOven("stuffed", "marinara", "cheddar", ["ground beef", "bacon", "onions"])

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
