// 🛍️ E-Commerce Cart System
// 🛒 Create a shopping cart system that manages products and their quantities.
//
// 1. Implement a class `ShoppingCart<T>` to handle products in a cart.
// 2. Implement a method `addToCart` that adds a product to the cart and updates the quantity if it already exists.
// 3. Implement a method `removeFromCart` that removes a product from the cart completely.
// 4. Implement a method `updateQuantity` that updates the quantity of a product in the cart.
// 5. Implement a method `getProductsOfCategory` that accepts a string and returns an array of items from the cart that match that category.
// 6. Implement a method `getTotalPrice` that returns the total cost of all items in the cart.
var Category;
(function (Category) {
    Category["Fruit"] = "Fruit";
    Category["Vegetable"] = "Vegetable";
    Category["Electronics"] = "Electronics";
    Category["Pastry"] = "Pastry";
    Category["Cereal"] = "Cereal";
})(Category || (Category = {}));
class ShoppingCart {
    cart = [];
    addToCart(product) {
        this.cart.push(product);
        return `${product.name} added to cart`;
    }
    updateQuantity(id, qty) {
        const foundProduct = this.cart.find(product => product.id === id);
        if (!foundProduct) {
            return `Product not found`;
        }
        foundProduct.quantity = qty;
        return `Updated quantity of ${foundProduct.name} to ${qty}`;
    }
    getTotalPrice() {
        let totalPrice = 0;
        this.cart.forEach(product => {
            totalPrice += product.price;
        });
        return totalPrice;
    }
    getProductsOfCategory(category) {
        let filterProduct = this.cart.filter(products => products.category === category);
        return filterProduct;
    }
    removeFromCart(id) {
        let foundProduct = this.cart.find(produc => produc.id == id);
        this.cart = this.cart.filter(produc => produc.id !== id);
        return `${foundProduct.name} removed form cart`;
    }
}
// Test cases
const cart = new ShoppingCart();
console.log(cart.addToCart({ id: 1, name: "Headphones", price: 50, quantity: 1, category: Category.Electronics })); // "Headphones added to cart."
console.log(cart.addToCart({ id: 2, name: "Keyboard", price: 100, quantity: 1, category: Category.Electronics })); // "Keyboard added to cart."
console.log(cart.addToCart({ id: 3, name: "Apple", price: 0, quantity: 1, category: Category.Fruit })); // "Keyboard added to cart."
console.log(cart.updateQuantity(1, 3)); // "Updated quantity of Headphones to 3."
console.log(cart.getProductsOfCategory("Electronics")); // Should return all electronics
console.log(cart.getTotalPrice()); // Should return the total cost of items
console.log(cart.removeFromCart(2)); // "Keyboard removed from cart."
