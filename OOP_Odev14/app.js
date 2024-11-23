// MVC HESAP MAKİNESİ ÇALIŞTIRMA KOMUTU
const app = new CalculatorController(
  new CalculatorModel(),
  new CalculatorView()
);

// Uygulama Akışı
// Kullanıcı Arayüzü: Kullanıcı, iki sayı girer ve yapmak istediği işlemi seçer (+ veya -). Ardından "Calculate" butonuna basar.
// View:
// Girdi verilerini alır.
// Girdileri Controllera iletir.
// Controller:
// Girdileri kontrol eder. Eğer girişler geçerli değilse bir hata mesajı gösterir.
// Geçerli bir giriş ise Model'i çağırır ve işlemi yaptırır.
// İşlem sonucunu alır ve View'a gönderir.
// Model:
// İşlemleri gerçekleştirir (örneğin: toplama veya çıkarma).
// Sonucu Controller'a döndürür.
// View:
// İşlem sonucunu veya hata mesajını kullanıcıya gösterir.

// SRP KULLANICI KAYDI ÇALIŞTIRMA KOMUTU

const model = new UserModel();
const view = new UserView();
const controller = new UsserController(model, view);

document.getElementById("register").addEventListener("click", () => {
  controller.handleRegistiration();
});

//DIP STOK YÖNETİMİ ÇALIŞTIRMA KOMUTU

const database = new InMemoryDatabase();
const stockController = new StockController(database);

//Ürün Ekleme
document.getElementById("add-product-btn").addEventListener("click", () => {
  const id = document.getElementById("product-id").value.trim();
  const name = document.getElementById("product-name").value.trim();
  const stock = parseInt(document.getElementById("product-stock").value, 10);

  if (id && name && !isNaN(stock)) {
    stockController.addProduct(id, name, stock);
    document.getElementById("product-id").value = "";
    document.getElementById("product-name").value = "";
    document.getElementById("product-stock").value = "";
  }
});

//Stok Güncelleme
document.getElementById("update-stock-btn").addEventListener("click", () => {
  const productId = document.getElementById("update-product-id").value.trim();
  const quantity = parseInt(
    document.getElementById("update-stock-quantity").value,
    10
  );

  if (productId && !isNaN(quantity)) {
    stockController.updateStock(productId, quantity);
    document.getElementById("update-product-id").value = "";
    document.getElementById("update-stock-quantity").value = "";
  }
});
