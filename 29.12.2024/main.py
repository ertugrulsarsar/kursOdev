# Görev 1: x'in y kuvvetini hesapla
x = int(input("Bir tam sayı girin (x): "))
y = int(input("Bir tam sayı girin (y): "))
result = x ** y
print(f"{x} sayısının {y} kuvveti: {result}")


# Görev 2: 100 ile 999 arasındaki iki aynı rakama sahip tam sayılar
count = 0
for num in range(100, 1000):
    str_num = str(num)
    if str_num[0] == str_num[1] or str_num[1] == str_num[2] or str_num[0] == str_num[2]:
        count += 1
print(f"100 ile 999 arasındaki iki aynı rakama sahip sayılar: {count}")



# Görev 3: 100 ile 9999 arasındaki tüm rakamları farklı olan tam sayılar
count = 0
for num in range(100, 10000):
    str_num = str(num)
    if len(set(str_num)) == len(str_num):  # Rakamlar farklı olmalı
        count += 1
print(f"100 ile 9999 arasındaki rakamları farklı olan sayılar: {count}")



# Görev 4: 3 ve 6 rakamlarını silme
num = input("Bir tam sayı girin: ")
modified_num = num.replace('3', '').replace('6', '')
print(f"Geriye kalan sayı: {modified_num}")
