class StockController {
  constructor(database) {
    this.database = database;
  }

  addProduct(id, name, stock) {
    const product = new Product(id, name, stock);
    this.database.addProduct(product);
    this.updateProductList();
  }

  updateStock(productId, quantity) {
    const product = this.database.getProduct(productId);
    if (product) {
      this.database.updateStock(productId, quantity);
      this.updateProductList();
    } else {
      return "Ürün Bulunamadı";
    }
  }

  updateProductList() {
    const productListContainer = document.getElementById(
      "product-list-container"
    );
    productListContainer.innerHTML = "";
    const products = this.database.getProducts();

    products.forEach((product) => {
      const div = document.createElement("div");
      div.classList.add("product-item");
      div.innerHTML = `
      <span>Ürün ID: ${product.id}</span>
            <span class="product-name">${product.name}</span>
            <span>Stok: ${product.stock}</span>
            `;
      productListContainer.appendChild(div);
    });
  }
}
