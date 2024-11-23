class IDatabase{
    addProduct(product){
        throw new Error("addProduct Yönetiminin Uygulanması Gereklidir")
    }
    getProduct(productId){
        throw new Error("getProduct Yönetiminin Uygulanması Gereklidir")
    }
    updateStock(productId, quantity){
        throw new Error("updateStock Yönetiminin Uygulanması Gereklidir")
    }
    getProducts(){
        throw new Error("getProducts Yönetiminin Uygulanması Gerekidir")
    }
}