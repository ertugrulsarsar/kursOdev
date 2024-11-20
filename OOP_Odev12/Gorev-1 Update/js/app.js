// Model ve View dosyalarındaki işlevleri içe aktar
import { fetchMovies, fetchMovieDetails } from "./model.js"; // Model: OMDB API'den veri çekme
import {
  renderMovies,
  renderPagination,
  renderDetails,
  updateMoreButton
} from "./view.js"; // View: Görüntüleme işlevleri

// HTML öğelerine erişim (DOM seçiciler)
const form = document.getElementById("searchForm"); // Arama formu
const movieList = document.getElementById("movieList"); // Film listesinin bulunduğu alan
const pagination = document.getElementById("pagination"); // Sayfa düğmelerinin bulunduğu alan
const details = document.getElementById("details"); // Film detaylarının gösterildiği alan
const moreButton = document.getElementById("moreButton"); // "Daha Fazla" butonu
const modal = document.getElementById("modal"); // Modal pencere
const modalLoading = document.getElementById("modalLoading"); // Modal yükleme simgesi
const modalDetails = document.getElementById("modalDetails"); // Modal detay içeriği

// Başlangıç sayfa numarası
let currentPage = 1;

// Yükleme simgesini göstermek için bir işlev
function showLoading() {
  document.getElementById("loading").style.display = "block"; // Yükleme simgesini görünür yap
}

// Yükleme simgesini gizlemek için bir işlev
function hideLoading() {
  document.getElementById("loading").style.display = "none"; // Yükleme simgesini gizle
}

// Filmleri yüklemek ve listelemek için bir işlev
async function loadMovies(query, type, page) {
  showLoading(); // Yükleme simgesini göster
  const data = await fetchMovies(query, type, page); // OMDB API'den film verilerini al
  hideLoading(); // Yükleme simgesini gizle

  if (data.Response === "True") {
    // Eğer API yanıtı başarılıysa
    renderMovies(data.Search, movieList); // Filmleri listele
    renderPagination(data.totalResults, page, pagination); // Sayfa düğmelerini oluştur
    updateMoreButton(moreButton, data.totalResults, page); // "Daha Fazla" butonunu güncelle
  } else {
    // Eğer API yanıtı başarısızsa
    movieList.innerHTML = `<p>${data.Error}</p>`; // Hata mesajını film listesine yazdır
    pagination.innerHTML = ""; // Sayfa düğmelerini temizle
    moreButton.style.display = "none"; // "Daha Fazla" butonunu gizle
  }
}

// Form gönderildiğinde arama işlemini başlat
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Formun varsayılan davranışını engelle (sayfa yenilenmez)
  const query = document.getElementById("movieName").value; // Kullanıcının girdiği film adı
  const type = document.getElementById("type").value; // Kullanıcının seçtiği film türü
  currentPage = 1; // Sayfa numarasını sıfırla
  loadMovies(query, type, currentPage); // İlk sayfayı yükle
});

// "Daha Fazla" butonuna tıklama işlevi
moreButton.addEventListener("click", async function () {
  const query = document.getElementById("movieName").value; // Kullanıcı araması
  const type = document.getElementById("type").value; // Tür
  currentPage++; // Sayfa numarasını artır

  const data = await fetchMovies(query, type, currentPage); // Yeni sayfa sonuçlarını al
  if (data.Response === "True") {
    // Eğer sonuçlar varsa
    renderMovies(data.Search, movieList); // Yeni filmleri mevcut listeye ekle
    updateMoreButton(moreButton, data.totalResults, currentPage); // "Daha Fazla" butonunu güncelle
    moreButton.style.display = "block"
  } else {
    // Eğer daha fazla sonuç yoksa
    moreButton.style.display = "none"; // "Daha Fazla" butonunu gizle
  }
  console.log(moreButton); // Eğer `null` dönüyorsa, HTML'de `id="moreButton"` öğesi eksik.
  console.log(getComputedStyle(moreButton).display); // "none" dönüyorsa, buton gizlidir.
  console.log(currentPage, totalResults); // Sayfa numarası ve toplam sonuçları kontrol edin


});

// Detay butonuna tıklandığında film detaylarını göster
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("details-btn")) {
    // Eğer tıklanan düğme "details-btn" sınıfına sahipse
    const imdbID = e.target.dataset.id; // IMDb ID'sini al
    modal.style.display = "flex"; // Modalı görünür yap
    modalLoading.style.display = "block"; // Modal yükleme simgesini göster
    modalDetails.innerHTML = ""; // Detay içeriğini temizle

    // Film detaylarını OMDB API'den al
    const detailsData = await fetchMovieDetails(imdbID);
    modalLoading.style.display = "none"; // Modal yükleme simgesini gizle
    modalDetails.innerHTML = `
            <div class="modal-header">
                <img src="${
                  detailsData.Poster !== "N/A"
                    ? detailsData.Poster
                    : "https://via.placeholder.com/300x450"
                }" 
                     alt="${detailsData.Title}" 
                     class="modal-poster"> <!-- Film posteri -->
                <div class="modal-info">
                    <h2>${detailsData.Title}</h2>
                    <p><strong>Yıl:</strong> ${detailsData.Year}</p>
                    <p><strong>Tür:</strong> ${detailsData.Genre}</p>
                    <p><strong>Yönetmen:</strong> ${detailsData.Director}</p>
                    <p><strong>Oyuncular:</strong> ${detailsData.Actors}</p>
                </div>
            </div>
            <div class="modal-body">
                <p>${detailsData.Plot}</p> <!-- Filmin konusu -->
            </div>
        `;
  }
});

// Modal kapatma işlevi
document.getElementById("closeModal").addEventListener("click", function () {
  modal.style.display = "none"; // Modalı gizle
});

// Sayfa değiştirildiğinde yeni sayfayı yükle
pagination.addEventListener("pageChange", function (e) {
  const query = document.getElementById("movieName").value; // Kullanıcı araması
  const type = document.getElementById("type").value; // Tür
  loadMovies(query, type, e.detail); // Yeni sayfayı yükle
});
