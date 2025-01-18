# Ürünlerin adını, fiyatını ve stok miktarını listeleyin
urunler = []

# Menü ile kullanıcıdan seçim alma
def menu():
    while True:
        print("\nStok Yönetim ve Sorgulama Sistemi")
        print("1: Ürün Girişi Yapma")
        print("2. Ürün Bilgisi Sorgulama")
        print("3. Stok Miktarı 10'dan Fazla Olan Ürünleri Listele")
        print("4. Toplam Stok Değeri Hesapla")
        print("5. Çıkış")
        
        secim = input("Bir seçenek girin (1/2/3/4): ").strip()
        
        if secim == "1":
            urun_girisi()
        elif secim == "2":
            urun_bilgisi()
        elif secim == "3":
            stok_10dan_fazla()
        elif secim == "4":
            toplam_stok_degeri()
        elif secim == "5":
            print("Çıkılıyor...")
            break
        else:
            print("Geçersiz seçenek, lütfen tekrar deneyin.")
            
# 1. Ürün Girişleri
def urun_girisi():
    ad = input("Ürün adını giriniz: ")
    stok = int(input("Stok miktarını giriniz: "))
    fiyat = float(input("Ürün fiyatını giriniz: "))
    urunler.append({"ad": ad, "fiyat": fiyat, "stok": stok})

    for urun in urunler:
        print(
            f"Urun: {urun['ad']} - Stok: {urun['stok']} - Fiyat: {urun['fiyat']}"
        )


# 2. Kullanıcıdan bir ürün adı alarak o ürünün stok miktarını ve fiyatını ekrana yazdırma
def urun_bilgisi():
    urun_adi = input("Bir ürün adı girin: ").strip()
    urun = next((urun for urun in urunler if urun['ad'].lower() == urun_adi.lower()), None)
    
    if urun:
        print(f"Ürün: {urun['ad']}, Stok: {urun['stok']}, Fiyat: {urun['fiyat']}")
    else:
        print("Ürün bulunamadı.")

# 3. Stok miktarı 10'dan fazla olan ürünleri listeleme
def stok_10dan_fazla():
    print("\nStok miktarı 10'dan fazla olan ürünler:")
    for urun in urunler:
        if urun['stok'] > 10:
            print(f"Ürün: {urun['ad']}, Stok: {urun['stok']}, Fiyat: {urun['fiyat']}")

# 4. Toplam stok değerini hesaplayarak ekrana yazdırma
def toplam_stok_degeri():
    toplam_deger = sum([urun['fiyat'] * urun['stok'] for urun in urunler])
    print(f"\nToplam stok değeri: {toplam_deger} TL")


# Programı başlatma
menu()
