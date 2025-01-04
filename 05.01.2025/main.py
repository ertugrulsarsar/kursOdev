# Görev 1

day_number = int(input("Haftanın gün numarasını girin (1-7): "))

if day_number == 1:
    print("Pazartesi")
elif day_number == 2:
    print("Salı")
elif day_number == 3:
    print("Çarşamba")
elif day_number == 4:
    print("Perşembe")
elif day_number == 5:
    print("Cuma")
elif day_number == 6:
    print("Cumartesi")
elif day_number == 7:
    print("Pazar")
else:
    print("Geçersiz bir gün numarası girdiniz.")


# Görev 2

month_number = int(input("Ay numarasını girin (1-12): "))

if month_number == 1:
    print("Ocak")
elif month_number == 2:
    print("Şubat")
elif month_number == 3:
    print("Mart")
elif month_number == 4:
    print("Nisan")
elif month_number == 5:
    print("Mayıs")
elif month_number == 6:
    print("Haziran")
elif month_number == 7:
    print("Temmuz")
elif month_number == 8:
    print("Ağustos")
elif month_number == 9:
    print("Eylül")
elif month_number == 10:
    print("Ekim")
elif month_number == 11:
    print("Kasım")
elif month_number == 12:
    print("Aralık")
else:
    print("Geçersiz bir ay numarası girdiniz.")


# Görev 3

number = float(input("Bir sayı girin: "))

if number > 0:
    print("Number is positive")
elif number < 0:
    print("Number is negative")
else:
    print("Number is equal to zero")


# Görev 4

num1 = float(input("Birinci sayıyı girin: "))
num2 = float(input("İkinci sayıyı girin: "))

if num1 == num2:
    print("Sayılar eşittir.")
else:
    sorted_numbers = sorted([num1, num2])
    print(f"Sayılar eşit değil. Artan sırayla: {sorted_numbers[0]}, {sorted_numbers[1]}")
