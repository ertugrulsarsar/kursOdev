import random

# 1. 5x5 boyutunda rastgele sayılarla doldurulmuş matris oluşturma
matris = [[random.randint(1, 100) for _ in range(5)] for _ in range(5)]

# 2. Matrisin her satırındaki elemanların toplamını hesaplama
satir_toplamlari = [sum(satir) for satir in matris]

# 3. Matrisin tüm elemanlarının toplamını ve ortalamasını bulma
toplam = sum([sum(satir) for satir in matris])
ortalama = toplam / 25

# 4. Matrisin köşegenindeki elemanları listeleme
kosegen = [matris[i][i] for i in range(5)]

# 5. Elemanları çift ve tek olanlara ayırma
ciftler = [eleman for satir in matris for eleman in satir if eleman % 2 == 0]
tekler = [eleman for satir in matris for eleman in satir if eleman % 2 != 0]

# Sonuçları yazdırma
print("Matris:")
for satir in matris:
    print(satir)

print("\nHer Satırdaki Elemanların Toplamı:", satir_toplamlari)
print("Tüm Elemanların Toplamı:", toplam)
print("Tüm Elemanların Ortalaması:", ortalama)
print("Köşegen Elemanları:", kosegen)
print("Çift Sayılar:", ciftler)
print("Tek Sayılar:", tekler)
