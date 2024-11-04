const countryInput = document.getElementById("country-input");
    const suggestionsList = document.getElementById("suggestions-list");
    const addButton = document.getElementById("add-button");
    const countryList = document.getElementById("country-list");

    // Ülkeleri tutmak için bir dizi (API’den alınan verilerle dolacak)
    let countries = []; 
    // Kullanıcı tarafından eklenen ülkeler
    let selectedCountries = []; 

    // API'den ülke verilerini çeken fonksiyon
    async function fetchCountries() {
        try {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            // API’den gelen ülkelerin isimlerini 'countries' dizisine ekle
            countries = data.map(country => country.name.common);
        } catch (error) {
            console.error("Ülke verisi alınırken bir hata oluştu:", error);
        }
    }

    // Sayfa yüklendiğinde ülkeleri çekmek için API çağrısı yap
    fetchCountries();

    // Kullanıcı input alanına bir şeyler yazdığında öneri listesini gösterir
    countryInput.addEventListener("input", function () {
        const inputValue = countryInput.value.toLowerCase();
        suggestionsList.innerHTML = ""; // Önce öneri listesini temizle

        // Girdi varsa öneri listesini filtreleyip göster
        if (inputValue) {
            // Girdiyle başlayan ülkeleri filtrele ve ilk 10 tanesini al
            const filteredCountries = countries
                .filter(country => country.toLowerCase().startsWith(inputValue))
                .slice(0, 10);

            // Filtrelenmiş her ülkeyi öneri listesine ekle
            filteredCountries.forEach(country => {
                const suggestionItem = document.createElement("div");
                suggestionItem.classList.add("suggestion-item");
                suggestionItem.textContent = country;
                suggestionsList.appendChild(suggestionItem);

                // Öneri öğesine tıklandığında input alanına ülke adını yaz ve listeyi kapat
                suggestionItem.addEventListener("click", function () {
                    countryInput.value = country;
                    suggestionsList.innerHTML = "";
                    suggestionsList.style.display = "none";
                });
            });

            // Öneri listesinde sonuç varsa göster, yoksa gizle
            suggestionsList.style.display = filteredCountries.length > 0 ? "block" : "none";
        } else {
            // Girdi boşsa öneri listesini gizle
            suggestionsList.style.display = "none";
        }
    });

    // Seçilen ülkeyi ekle butonuna tıklandığında listeye ekleyen fonksiyon
    addButton.addEventListener("click", function () {
        const country = countryInput.value.trim();
        // Ülke boş değilse ve henüz seçilen ülkeler listesinde yoksa ekle
        if (country && !selectedCountries.includes(country)) {
            selectedCountries.push(country);
            selectedCountries.sort(); // Ülke listesini alfabetik sıraya göre düzenle
            updateCountryList(); // Listeyi ekranda güncelle
            countryInput.value = ""; // Input alanını temizle
        }
    });

    // Seçilen ülkeleri ekranda gösteren fonksiyon
    function updateCountryList() {
        countryList.innerHTML = ""; // Önce mevcut listeyi temizle
        selectedCountries.forEach(country => {
            const countryBox = document.createElement("div");
            countryBox.classList.add("country-box");
            countryBox.textContent = country; // Ülke adını kutunun içine ekle
            countryList.appendChild(countryBox);
        });
    }

    // Kullanıcı input dışında bir yere tıkladığında öneri listesini kapat
    document.addEventListener("click", function (event) {
        if (!suggestionsList.contains(event.target) && event.target !== countryInput) {
            suggestionsList.style.display = "none";
        }
    });