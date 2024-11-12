const apiKey = "4fdca78f";

// Film arama işlevi tanımlama
async function search() {
  //Kullanıcının girdiğini film adını çekme
  const title = document.getElementById("text").ariaValueMax.trim();

  //Kullanıcının seçtiği türü çek
  const tur = document.getElementById("tur").value;

  //Eğer film adı boşsa kullanıcıya uyaru ver
  if (!title) {
    alert("Lütfen bir film adı girin!");
    return;
  }

  //Api istek göndermek için url
  const url = `http://img.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(
    title
  )}&type=tur`;

  try {
    //fetch() ile API isteği ve yanıt bekleme
    const response = await fetch(url);

    //yanıtı json formatında alıyorum

    const data = await response.json();

    //Eğer apiden olumlu bir yanıt gelirse, tür filtresine göre sonuçları filtrele
    if (data.response === "True") {
      //eğer tür belirtemişse, sonuçları türe göre filtrele
      const filteredResults = tur
        ? data.Search.filter((movie) => movie.tur && movie.tur.includes(tur))
        : data.Search;

      //Filtrelenmiş sonuçları göster
      displayResults(filteredResults);
    } else {
      //Api bir hata mesajı verirse ekranda göster
      document.getElementById("results").innerHTML = `
            <p>${data.Error}</p>
            `;
    }
  } catch (error) {
    //bir hata oluştuğunda kullanıcıya verilen bilgi
    console.error("Bir hata oluştu:", error);
    document.getElementById("results").innerHTML = `<p>Film Bulunamadı</p>`;
  }
}

//Arama sonuçlarını ekrana yazdırma fonksiyonu

function displayResults(results) {
  //sonuçları gösterme için seçilen div
  const resultsDiv = document.getElementById("results");
  //eski arama sonuçlarını temizle
  resultsDiv.innerHTML = "";

  //eğer sonuç yoksa kullanıcıya mesaj
  if (results.length === 0){
    resultsDiv.innerHTML = `<p>Film bulunamadı!</p>`
  }
  else{
    //her film sonucunu ekrana ekle
    results.forEach(movie => {
        //film sonucunu temsil eden bir div
        const movieItem = document.createElement("div")
        //movie-item sınıfını dive ekle
        movieItem.classList.add("movie-item")
        //film başlığını ve yılı içeren html içeriği
        movieItem.innerHTML = `<strong>${movie.Title}</strong>(${movie.Year})`
        //film bilgisini sonuçlara ekle
        resultsDiv.appendChild(movieItem)
    });
  }
}
