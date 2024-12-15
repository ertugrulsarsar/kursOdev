"""Görev 1 """
number1 = int(input("Birinci sayıyı girin: "))
number2 = int(input("İkinci sayıyı girin: "))
number3 = int(input("Üçüncü sayıyı girin: "))

result = str(f"{number1}{number2}{number3}")
print(result)


"""Görev 2"""

number = int(input("Dört basasmaklı bir sayı girin: "))
birler = number % 10
onlar = (number // 10) % 10
yuzler = (number // 100) % 10
binler = number // 1000
result = birler * onlar * yuzler * binler
print(result)

"""Görev 3"""
mil = 1609.344
metre = int(input("Lütfen metre cinsinden bir uzunluk girin: "))

cm = metre * 100
dm = metre * 10
mm = metre * 1000
mil = metre / mil

print(f"Santimetre: {cm}, Desimetre: {dm}, Milimetre: {mm}, Mil: {mil}")


"""Görev 4"""
taban = float(input("Taban uzunluğu girin: "))
yukseklik = float(input("Yüksekliğini girin: "))

alan = (taban * yukseklik) / 2

print(f"Üçgenin Alanı: {alan}")


"""Görev 5"""

number = int(input("Lütfen bir sayı girin: "))
tersNumber = int(str(number)[::-1]) #Pythonda tersten yazdırmak için kullanabiliriz. Başlangıç,bitiş,adım. 
print(tersNumber)
