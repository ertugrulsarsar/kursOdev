"""Görev 1"""

try:
    dayNumber = int(input("Haftanın günlere ait numarasını girin (1/7): "))
    
    match dayNumber:
        case 1: print("Pazartesi")
        case 2: print("Salı")
        case 3: print("Çarşamba")
        case 4: print("Perşembe")
        case 5: print("Cuma")
        case 6: print("Cumartesi")
        case 7: print("Pazar")
        case _: print("Lütfen 1 ile 7 arasında bir sayı girin.")
except ValueError:
    print("Girdiğiniz sayı geçersizdir.")


"""Görev 2"""

def ay_adi(number):
    aylar = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]
    return aylar[number - 1] #indeks değerini bulmak için örneğin kullanıcı: 10 girerse indeksi: 9 olur. = Ekim

try:
    number = int(input("Ayın sayı cinsinden değerini yazın (1-12): "))
    if 1 <= number <=12:
        print(f"Ay: {ay_adi(number)}")
    else:
        print("Lütfen 1 ile 12 arsaında bir sayı girin.")
except ValueError:
    print("Geçersiz giriş.")
    
    
    
"""Görev 3"""

try:
    sayi = int(input("Bir sayı girin: "))
    if sayi > 0:
        print("Number is positive")
    elif sayi < 0:
        print("Number is negative")
    else:
        print("Number is equal to zero")
except ValueError:
    print("Geçersiz Giriş.")
    

"""Görev 4"""

try:
    number1 = int(input("Birinci sayıyı girin: "))
    number2 = int(input("İkinci sayıyı girin: "))
    
    if number1 == number2:
        print("Sayılar eşit")
    else:
        if number1 < number2:
            print(f"Küçükten büyüğe: {number1}, {number2}")
        else:
            print(f"Küçükten büyüğe: {number2}, {number1}")
            
except ValueError:
    print("Geçersiz giriş.")