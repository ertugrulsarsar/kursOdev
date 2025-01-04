import re

def dosya_oku(dosya_yolu):
    # Dosyayı aç ve içeriğini oku
    with open(dosya_yolu, 'r', encoding='utf-8') as file:
        metin = file.read()
    return metin

def kelime_harf_cumle_sayisi(metin):
    # Kelimeleri ayırma (boşluklarla)
    kelimeler = metin.split()
    kelime_sayisi = len(kelimeler)

    # Harf sayısını bulma
    harf_sayisi = len([char for char in metin if char.isalpha()])

    # Cümle sayısını bulma (".", "!", "?") noktalama işaretlerine göre
    cumleler = re.split(r'[.!?]', metin)
    cumle_sayisi = len([cumle for cumle in cumleler if cumle.strip()])

    return kelime_sayisi, harf_sayisi, cumle_sayisi

def kelimeleri_sirala(metin):
    # Tüm kelimeleri ayırma ve alfabetik sıralama
    kelimeler = re.findall(r'\b\w+\b', metin)
    kelimeler = sorted(kelimeler, key=str.lower)
    return kelimeler

def kacis_dizilerini_isle(metin):
    # Kaçış dizilerini işleyerek metni ham dize formatına çevir
    metin = bytes(metin, "utf-8").decode("unicode_escape")
    return metin

def regex_tespit_et(metin):
    # E-posta, telefon numarası ve tarihleri tespit etme
    emailler = re.findall(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', metin)
    telefonlar = re.findall(r'\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}', metin)
    tarihler = re.findall(r'\b\d{1,2}[-/]\d{1,2}[-/]\d{4}\b', metin)
    
    return emailler, telefonlar, tarihler

def yazdir_sonuclar(kelime_sayisi, harf_sayisi, cumle_sayisi, kelimeler, kacis_dizileri, emailler, telefonlar, tarihler):
    print(f"Kelime Sayısı: {kelime_sayisi}")
    print(f"Harf Sayısı: {harf_sayisi}")
    print(f"Cümle Sayısı: {cumle_sayisi}")
    print("\nAlfabetik Olarak Sıralanmış Kelimeler:")
    print(", ".join(kelimeler))
    print("\nKaçış Dizileri İşlenmiş Metin:")
    print(kacis_dizileri)
    print("\nE-posta Adresleri:")
    print("\n".join(emailler))
    print("\nTelefon Numaraları:")
    print("\n".join(telefonlar))
    print("\nTarihler:")
    print("\n".join(tarihler))

# Ana program akışı
dosya_yolu = input("Lütfen metin dosyasının yolunu girin: ")
metin = dosya_oku(dosya_yolu)

kelime_sayisi, harf_sayisi, cumle_sayisi = kelime_harf_cumle_sayisi(metin)
kelimeler = kelimeleri_sirala(metin)
kacis_dizileri = kacis_dizilerini_isle(metin)
emailler, telefonlar, tarihler = regex_tespit_et(metin)

yazdir_sonuclar(kelime_sayisi, harf_sayisi, cumle_sayisi, kelimeler, kacis_dizileri, emailler, telefonlar, tarihler)
