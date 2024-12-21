def maas_hesaplama(satis):
    if satis <= 500:
        return 200 + (satis * 0.03)
    elif satis <= 1000:
        return 200 +(satis * 0.05)
    else:
        return 200 + (satis * 0.08)
    

try:
    satislar = []
    for i in range(1,4):
        satis = float(input(f"{i}. yöneticinin satışlarını girin: "))
        satislar.append(satis)
        
    maaslar = [maas_hesaplama(satis) for satis in satislar]
    
    best_of_yonetici = maaslar.index(max(maaslar))
    maaslar[best_of_yonetici] += 200
    
    for i in range(3):
        print(f"{i+1}. Yönetici Maaşı: {maaslar[i]:.2f}$")
        
    print(f"En iyi yönetic: {best_of_yonetici + 1}. yönetici, Prim Dahil Maaş: {maaslar[best_of_yonetici]:.2f}$")
    
    
except ValueError:
    print("Geçersiz Giriş.")