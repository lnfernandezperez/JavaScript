// Tienes dos listas de productos en tu tienda online. Combina estas listas en una sola usando lo visto anteriormente y mostrarlo por consola.
// let electronics = ['laptop', 'phone', 'tablet'];
// let accessories = ['headphones', 'charger', 'case'];

let electronics = ["laptop", "phone", "tablet"];
let accessories = ["headphones", "charger", "case"];

let onlineShop = [...electronics, ...accessories];
console.log(onlineShop);

// Tienes una lista de los productos más vendidos. Extrae el primero y el segundo producto usando destructuring.
let bestSellers = ["laptop", "phone", "tablet", "monitor"];

let [product1, product2, , ,] = bestSellers;

// Verifica si el producto phone existe en la lista de productos, si existe, mostrar por consola un mensaje “Existe el producto [nombre del producto]”
let saleItems = ["laptop", "phone", "headphones"];
let findPhone = saleItems.find(function (saleItems) {
  return saleItems === "phone";
});

// Verifica si un producto específico está en la lista de deseos. Si existe, mostrar por consola un mensaje “El producto existe, su nombre es [nombre del producto]”
// let wishlist = ['laptop', 'phone', 'headphones'];

// Filtra los productos que empiezan con la letra 'p' en la lista.

let products = [
  "laptop",
  "phone",
  "tablet",
  "printer",
  "pen",
  "monitor",
  "keyboard",
  "mouse",
  "headphones",
  "camera",
  "notebook",
];
let conP = products.filter(function (product) {
  return product.includes("p");
});

console.log(conP);
// Escribe una función combineProductLists que tome dos listas de productos y las combine en una sola usando la sintaxis spread.

function combineProductLists(electronics, accessories) {
  return [...accessories, ...electronics];
}
let combinedProducts = combineProductLists(electronics, accessories);

console.log(combinedProducts);
// Crea una función getTopTwo que tome una lista de productos y devuelva los dos primeros usando destructuring.

function getTopTwo(products) {
  let [prd1, prd2] = products;
  return [prd1, prd2];
}

let topTwo = getTopTwo(products);

console.log(topTwo);
// Escribe una función isOnSale que verifique si algún producto de una lista de productos en oferta es un artículo específico.
// Ejemplo, si tengo una lista de productos electrónicos, y quiero que el producto en oferta sea celular, entonces ese es el que debería ser tomado en cuenta a la hora de validar dentro de nuestra función.
function isOnSale(products, saleProduct) {
  return products.includes(saleProduct);
}

let productsOnSale = ["laptop", "cellphone", "tablet", "headphones"];
let productToCheck = "cellphone";

let isProductOnSale = isOnSale(productsOnSale, productToCheck);

console.log(isProductOnSale);

// Crea una función areAllWordsLong que verifique si todas las palabras en una lista tienen más de tres letras.

function areAllWordsLong(words) {
  return words.every((word) => word.length > 3);
}

let words1 = ["apple", "banana", "kiwi"];
let words2 = ["cat", "dog", "elephant"];

console.log(areAllWordsLong(words1));
console.log(areAllWordsLong(words2));

// Crea una función areAllEven que verifique si todos los números en una lista son pares.

function areAllEven(numbers) {
  return numbers.every((number) => number % 2 === 0);
}

let numbers1 = [2, 4, 6, 8];
let numbers2 = [1, 2, 3, 4];

console.log(areAllEven(numbers1));
console.log(areAllEven(numbers2));

// Escribe una función findProductWithLetter que encuentre el primer producto en la lista que contiene una letra específica.

function findProductWithLetter(products, letter) {
  return products.find((product) => product.includes(letter));
}

let products = ["laptop", "cellphone", "tablet", "headphones"];
let letter = "e";

let productWithLetter = findProductWithLetter(products, letter);

console.log(productWithLetter);

// Define una función createProduct que agregue a un array el producto, pero que antes verifique si el producto ya existe en ese array
// Ejemplo de uso:
// Si el producto existe Mostrar mensaje El producto [nombre] ya existe
// Si no existe, lo agrego al array y retorno los valores.
function createProduct(products, newProduct) {
  if (products.includes(newProduct)) {
    console.log(`El producto ${newProduct} ya existe`);
    return products;
  } else {
    products.push(newProduct);
    return products;
  }
}
let productList = ["laptop", "cellphone", "tablet"];
let newProduct1 = "cellphone";
let newProduct2 = "headphones";

createProduct(productList, newProduct1);
createProduct(productList, newProduct2);

console.log(productList);

// Escribe una función arePricesInRange que compruebe si todos los precios de una lista están entre 50 y 150.
// Ejemplos:
// const prices1 = [60, 80, 120, 150];
// const prices2 = [40, 80, 120, 200];

function arePricesInRange(prices) {
  return prices.every((price) => price >= 50 && price <= 150);
}

const prices1 = [60, 80, 120, 150];
const prices2 = [40, 80, 120, 200];

console.log(arePricesInRange(prices1));
console.log(arePricesInRange(prices2));

// Define una función formatExpensiveProducts que tome una lista de precios y agregue una etiqueta Caro a los precios superiores a 100.
// Ejemplo:
// const prices = [80, 120, 200, 90];
// ['$80', 'Caro: $120', 'Caro: $200', '$90']

function formatExpensiveProducts(prices) {
  return prices.map((price) => (price > 100 ? `Caro: $${price}` : `$${price}`));
}

const prices = [80, 120, 200, 90];

console.log(formatExpensiveProducts(prices));

// Define una función addIfNotExists que añada un producto a una lista solo si no está ya presente.
function addIfNotExists(products, newProduct) {
  if (!products.includes(newProduct)) {
    products.push(newProduct);
  }
  return products;
}

let productList2 = ["laptop", "cellphone", "tablet"];
let newProduct3 = "cellphone";
let newProduct4 = "headphones";

addIfNotExists(productList2, newProduct3);
addIfNotExists(productList2, newProduct4);

console.log(productList2);

// Crea una función createDescriptions que tome una lista de nombres de productos y una lista de precios, y devuelva una lista de descripciones que combine ambos usando map.
// Se debe ver algo parecido a esto (La descripción puede cambiar según lo que estemos contemplando nosotros):
// ['laptop cuesta $1000', 'phone cuesta $500', 'tablet cuesta 300']

function createDescriptions(names, prices) {
  return names.map((name, index) => `${name} cuesta $${prices[index]}`);
}

let productNames = ["laptop", "phone", "tablet"];
let productPrices = [1000, 500, 300];

console.log(createDescriptions(productNames, productPrices));

// Crea una función addToWishlist que añada un producto a la lista de deseos solo si el producto no está ya presente y la lista de deseos tiene menos de 5 productos. Realizar validaciones correspondientes.
function addToWishlist(wishlist, product) {
  if (wishlist.length >= 5) {
    console.log("La lista de deseos ya tiene 5 productos");
    return wishlist;
  }

  if (!wishlist.includes(product)) {
    wishlist.push(product);
  } else {
    console.log(`El producto ${product} ya está en la lista de deseos`);
  }

  return wishlist;
}

let wishlist = ["laptop", "phone", "tablet"];
addToWishlist(wishlist, "headphones");
addToWishlist(wishlist, "laptop");
addToWishlist(wishlist, "watch");
addToWishlist(wishlist, "camera");
addToWishlist(wishlist, "mouse");

console.log(wishlist);
addToWishlist(wishlist, "keyboard");

// Define una función inventoryMessages que tome una lista de productos y una lista de cantidades en inventario, devolviendo una lista de mensajes que indiquen si cada producto está en stock o agotado.
// Ejemplo de salida:
// // ['laptop está en stock con 5 unidades', 'phone está agotado', 'tablet está en stock con 3 unidades']

function inventoryMessages(products, quantities) {
  return products.map((product, index) => {
    let quantity = quantities[index];
    return quantity > 0
      ? `${product} está en stock con ${quantity} unidades`
      : `${product} está agotado`;
  });
}

let productList3 = ["laptop", "phone", "tablet"];
let quantities = [5, 0, 3];

console.log(inventoryMessages(productList3, quantities));
