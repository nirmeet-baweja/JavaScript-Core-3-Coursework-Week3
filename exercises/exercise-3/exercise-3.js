let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function calcPrice({ itemName, quantity, unitPrice }) {
  let price = quantity * unitPrice;
  let item = { quantity, itemName, price };
  return item;
}

let finalOrder = [];
order.forEach((item) => {
  let itemPrice = calcPrice(item);
  finalOrder.push(itemPrice);
});

console.table(finalOrder);
