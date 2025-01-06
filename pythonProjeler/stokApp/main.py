# 1. Ürünlerin adını, fiyatını ve stok miktarını listeleyin
urunler = [
    {"isim": "Elma", "fiyat": 50, "stok": 20},
    {"isim": "Erik", "fiyat": 100, "stok": 5},
    {"isim": "Armut", "fiyat": 30, "stok": 15},
    {"isim": "Üzüm", "fiyat": 75, "stok": 8},
    {"isim": "Ceviz", "fiyat": 20, "stok": 25}
]

# 2. Kullanıcıdan bir ürün adı alarak o ürünün stok miktarını ve fiyatını ekrana yazdırma
def urun_bilgisi():
    urun_adi = input("Bir ürün adı girin: ").strip()
    urun = next((item for item in urunler if item['isim'].lower() == urun_adi.lower()), None)
    
    if urun:
        print(f"Ürün: {urun['isim']}, Stok: {urun['stok']}, Fiyat: {urun['fiyat']}")
    else:
        print("Ürün bulunamadı.")

# 3. Stok miktarı 10'dan fazla olan ürünleri listeleme
def stok_10dan_fazla():
    print("\nStok miktarı 10'dan fazla olan ürünler:")
    for urun in urunler:
        if urun['stok'] > 10:
            print(f"Ürün: {urun['isim']}, Stok: {urun['stok']}, Fiyat: {urun['fiyat']}")

# 4. Toplam stok değerini hesaplayarak ekrana yazdırma
def toplam_stok_degeri():
    toplam_deger = sum([urun['fiyat'] * urun['stok'] for urun in urunler])
    print(f"\nToplam stok değeri: {toplam_deger} TL")

# Menü ile kullanıcıdan seçim alma
def menu():
    while True:
        print("\nStok Yönetim ve Sorgulama Sistemi")
        print("1. Ürün Bilgisi Sorgulama")
        print("2. Stok Miktarı 10'dan Fazla Olan Ürünleri Listele")
        print("3. Toplam Stok Değeri Hesapla")
        print("4. Çıkış")
        
        secim = input("Bir seçenek girin (1/2/3/4): ").strip()
        
        if secim == "1":
            urun_bilgisi()
        elif secim == "2":
            stok_10dan_fazla()
        elif secim == "3":
            toplam_stok_degeri()
        elif secim == "4":
            print("Çıkılıyor...")
            break
        else:
            print("Geçersiz seçenek, lütfen tekrar deneyin.")

# Programı başlatma
menu()
