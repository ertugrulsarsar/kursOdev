
"""Görev 1""" #Alternatif yaklaşım ile farklı bir yol denendi.

try:
    # Kullanıcından üç sayı alınıyor ve liste (numbers) içinde toplanıyor
    numbers = [int(input(f"{i + 1}. sayıyı girin: "))for i in range(3)]
    
    # Matematik işlemlerini tutan bir sözlük oluşturuluyor
    operations = {
        "+" : lambda nums: sum(nums),
        "*" : lambda nums: nums[0] * nums[1] * nums[2]
    }
    
    secim = input("Toplam için '+', çarpım için '*' girin: ")
    
    # Kullanıcının seçimi kontrol ettiği yer
    if secim in operations:
        result = operations[secim](numbers)
        print(f"Sonuç: {result}")
    else:
        print("Geçersiz Seçim")
        
#Eğer kullanıcı sayı yerine başka bir giriş yaparsa bu hatayı alır
except ValueError as error:
    print(f"Hata: {error}")
    
    
"""Görev 2"""  # Alternatif yaklaşım
try:
    numbers = [int(input(f"{i + 1}. sayıyı girin: "))for i in range(3)]

    secim = input("Maksimum için 'M', minimum için 'N', ortalama için 'O' girin: ").upper()

    # Kullanıcının seçimine göre işlem yap
    if secim == "M":
        print(f"Üç sayının maksimumum: {max(numbers)}")
    elif secim == "N":
        print(f"Üç sayının minimumum: {min(numbers)}")
    elif secim == "O":
        print(f"Üç sayının aritmetik ortalaması: {sum(numbers) / len(numbers)}") #sayıları topla numbers içerisindeki sayıların uzunluğuna böl
    else:
        print("Geçersiz değer")
        
except ValueError as error:
    print(f"Hata: {error}")
        
        
        
"""Görev 3"""

try:
    metre = float(input("Metre cinsinden bir değer girin: "))
    
    conversions= {
        "M": lambda m: m * 0.000621371, # Mil'e dönüşüm formülü
        "I": lambda m: m * 39.3701, # İnc'e dönüşüm formülü
        "Y": lambda m: m * 1.09361 #Yard'a dönüşüm formülü
    }

    secim = input("Mil için 'M', inç için 'I', yarda için 'Y' girin: ").upper()
    
    
    if secim in conversions:
        result = conversions[secim](metre)
        
        print(f"{metre} metre = {result} {secim}")
    else:
        print("Geçersiz seçim")
        
except ValueError as error:
    print(f"Hata: {error}")