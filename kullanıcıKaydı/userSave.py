import re
import bcrypt
import json
import os

# Kullanıcı bilgilerini saklayacak dosya
USER_FILE = "users.json"

# Kullanıcı adı kontrolü (alfanümerik olup olmadığını kontrol et)
def is_valid_username(username):
    return username.isalnum()

# Şifre kontrolü (büyük harf, küçük harf, rakam ve özel karakter kontrolü)
def is_valid_password(password):
    pattern = re.compile(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
    return re.match(pattern, password)

# Şifreyi hash'leme (bcrypt ile)
def hash_password(password):
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

# Şifreyi doğrulama
def check_password(hashed_password, user_password):
    return bcrypt.checkpw(user_password.encode('utf-8'), hashed_password)

# Kullanıcı bilgilerini dosyadan yükleme
def load_users():
    if os.path.exists(USER_FILE):
        with open(USER_FILE, 'r') as file:
            return json.load(file)
    return []

# Kullanıcı bilgilerini dosyaya kaydetme
def save_users(users):
    with open(USER_FILE, 'w') as file:
        json.dump(users, file, indent=4)

# Kayıt olma işlemi
def register():
    username = input("Kullanıcı adı: ")
    if not is_valid_username(username):
        print("Hata: Kullanıcı adı yalnızca alfanümerik olmalıdır!")
        return

    password = input("Şifre: ")
    if not is_valid_password(password):
        print("Hata: Şifre en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir!")
        return

    # Şifreyi hash'le
    hashed_password = hash_password(password)

    users = load_users()
    # Aynı kullanıcı adı olup olmadığını kontrol et
    if any(user['username'] == username for user in users):
        print("Hata: Bu kullanıcı adı zaten alınmış!")
        return

    users.append({"username": username, "password_hash": hashed_password.decode('utf-8')})
    save_users(users)
    print("Kayıt başarılı!")

# Giriş yapma işlemi
def login():
    username = input("Kullanıcı adı: ")
    password = input("Şifre: ")

    users = load_users()
    user = next((user for user in users if user['username'] == username), None)

    if user is None:
        print("Hata: Kullanıcı adı bulunamadı!")
        return

    if check_password(user['password_hash'].encode('utf-8'), password):
        print("Giriş başarılı!")
    else:
        print("Hata: Şifre yanlış!")

# Ana program
def main():
    while True:
        print("\n1. Kayıt Ol")
        print("2. Giriş Yap")
        print("3. Çık")
        choice = input("Bir seçenek girin: ")

        if choice == '1':
            register()
        elif choice == '2':
            login()
        elif choice == '3':
            break
        else:
            print("Geçersiz seçim, lütfen tekrar deneyin.")

if __name__ == "__main__":
    main()
