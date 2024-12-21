"""Görev 1"""

try:
    sayi = int(input("1-100 arasında bir sayı girin: "))
    
    if 1 <= sayi <=100:
        
        if sayi % 3 == 0 and sayi % 5 == 0:  #hem 3'e hem de 5'e tam bölünebilen
            print("Fizz Buzz")
        elif sayi % 3 == 0:
            print("Fizz")
        elif sayi % 5 == 0:
            print("Buzz")
        else:
            print(f"Sayı: {sayi}")
    else:
        print("1 ile 100 arasında bir sayı girin.")
except ValueError:
    print("Yanlış Değer Girdiniz.")
    
    
    
"""Görev 2"""

try:
    sayi = int(input("Bir sayı girin: "))
    kuvvet = int(input("Sayının kaçıncı kuvvetini alacağınızı seçin (0/7): "))
    
    if 0 <= kuvvet <= 7:
        sonuc = sayi ** kuvvet
        print(f"{sayi}^{kuvvet} = {sonuc}")
    else:
        print("Lütfen 0 ile 7 arasında bir sayı girin")
        
except ValueError:
    print("Lütfen sayı girin.")
