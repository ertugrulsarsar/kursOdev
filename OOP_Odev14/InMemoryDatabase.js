class InMemoryDatabase extends IDatabase {
  constructor() {
    super();
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getProduct(productId) {
    return this.products.find((product) => product.id === productId);
  }

  updateStock(productId, quantity) {
    const product = this.getProduct(productId);
    if (product) {
      product.stock += quantity;
    }
  }

  getProducts() {
    return this.products;
  }
}
