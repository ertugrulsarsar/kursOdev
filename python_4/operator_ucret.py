def operator_maliyet(sure, arayan_op, aranan_op):
    ucretler = {
        ("Turkcell", "Vodafone"): 8.20,
        ("Turkcell", "TurkTelekom"): 8.10,
        ("Turkcell", "Turkcell"): 7.50,
        ("Vodafone", "Turkcell"): 8.22,
        ("Vodafone", "TurkTelekom"): 8.15,
        ("Vodafone", "Vodafone"): 7.80,
        ("TurkTelekom", "Turkcell"): 7.25,
        ("TurkTelekom", "Vodafone"): 8.17,
        ("TurkTelekom", "TurkTelekom"): 7.00
    }
    
    return sure * ucretler[arayan_op, aranan_op]

try:
    sure = float(input("Konuşma süresini belirtin (dakika): "))
    operatorler = ["Turkcell", "Vodafone", "TurkTelekom"]
    print("Operatörler: 1. Turkcell, 2. Vodafone, 3. TurkTelekom")
    arayan_op_secim = int(input("Arayan Operatörü Seçimi: "))
    aranan_op_secim = int(input("Aranan Operatör Seçimi: "))
    
    if 1 <= arayan_op_secim <= 3 and 1 <= aranan_op_secim <= 3:
        arayan_op = operatorler[arayan_op_secim - 1]
        aranan_op = operatorler[aranan_op_secim - 1]
        maliyet = operator_maliyet(sure,arayan_op,aranan_op)
        print(f"Toplam Maliyet: {maliyet:.2f} TL")
        
    else:
        print("Geçersiz Operatör Seçimi")
except ValueError:
    print("Geçersiz Giriş.")