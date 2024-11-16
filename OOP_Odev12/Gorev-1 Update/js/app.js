// OMDB API'den veri almak için gereken model işlevlerini içe aktar
import { fetchMovies, fetchMovieDetails } from "./model.js"; 

// Filmleri listelemek, sayfalama düğmeleri oluşturmak ve detayları göstermek için view işlevlerini içe aktar
import { renderMovies, renderPagination, renderDetails } from "./view.js"; 

// HTML öğelerine erişim (DOM seçiciler)
const form = document.getElementById("searchForm");
const movieList = document.getElementById("movieList");
const pagination = document.getElementById("pagination");
const details = document.getElementById("details");
const moreButton = document.getElementById("moreButton");
const modal = document.getElementById("modal");
const modalLoading = document.getElementById("modalLoading");
const modalDetails = document.getElementById("modalDetails");

// Başlangıç sayfası numarası (pagination için)
let currentPage = 1;

// Yükleme simgesini göstermek için bir işlev
function showLoading() {
    document.getElementById("loading").style.display = "block";
}

// Yükleme simgesini gizlemek için bir işlev
function hideLoading() {
    document.getElementById("loading").style.display = "none";
}

// Filmleri OMDB API'den yüklemek ve listelemek için işlev
async function loadMovies(query, type, page) {
    showLoading(); // Yükleme simgesini göster
    const data = await fetchMovies(query, type, page); // Filmleri API'den al
    hideLoading(); // Yükleme simgesini gizle

    if (data.Response === "True") { // API yanıtı başarılıysa
        renderMovies(data.Search, movieList); // Filmleri listele
        renderPagination(data.totalResults, page, pagination); // Sayfalama düğmelerini oluştur

        // More düğmesini kontrol et
        if (page * 10 < data.totalResults) {
            moreButton.style.display = "block"; // Daha fazla film varsa göster
        } else {
            moreButton.style.display = "none"; // Daha fazla film yoksa gizle
            console.log("Başka sonuç yok.");
        }
    } else { // API yanıtı başarısızsa
        movieList.innerHTML = `<p>${data.Error}</p>`; // Hata mesajını görüntüle
        pagination.innerHTML = ""; // Sayfalama alanını temizle
    }
}


// Form gönderildiğinde arama işlemini başlat
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Formun varsayılan davranışını engelle (sayfa yenilemesini durdur)
    const query = document.getElementById("movieName").value; // Kullanıcının girdiği film adı
    const type = document.getElementById("type").value; // Kullanıcının seçtiği film türü
    currentPage = 1; // Sayfa numarasını sıfırla
    loadMovies(query, type, currentPage); // İlk sayfayı yükle
});

// More düğmesine tıklandığında bir sonraki sayfayı yükle
moreButton.addEventListener("click", async function () {
    const query = document.getElementById("movieName").value; // Arama kelimesi
    const type = document.getElementById("type").value; // Tür
    this.disabled = true; // Düğmeyi geçici olarak devre dışı bırak
    showLoading(); // Yükleme simgesini göster
    currentPage++; // Sayfa numarasını bir artır

    const data = await fetchMovies(query, type, currentPage); // API'den sonraki sayfayı al
    hideLoading(); // Yükleme simgesini gizle
    this.disabled = false; // Düğmeyi yeniden etkinleştir

    if (data.Response === "True") { // API yanıtı başarılıysa
        renderMovies(data.Search, movieList); // Yeni filmleri listeye ekle
    } else { // Daha fazla sonuç yoksa
        this.style.display = "none"; // More düğmesini gizle
    }
});

// Detay butonuna tıklandığında film detaylarını modal içinde göster
document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('details-btn')) { // Eğer "details-btn" sınıfı olan bir düğmeye tıklanırsa
        const imdbID = e.target.dataset.id; // IMDb ID'sini al
        modal.style.display = 'flex'; // Modalı görünür yap
        modalLoading.style.display = 'block'; // Yükleme simgesini göster
        modalDetails.innerHTML = ''; // Detay içeriğini temizle

        // Film detaylarını API'den al
        const detailsData = await fetchMovieDetails(imdbID);
        modalLoading.style.display = 'none'; // Yükleme simgesini gizle
        modalDetails.innerHTML = `
            <div class="modal-header">
                <img src="${detailsData.Poster !== 'N/A' ? detailsData.Poster : 'https://via.placeholder.com/300x450'}" 
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

// Modalı kapatma işlevi
document.getElementById("closeModal").addEventListener("click", function () {
    modal.style.display = "none"; // Modalı gizle
});

// Sayfa değiştirildiğinde yeni sayfayı yükle
pagination.addEventListener("pageChange", function (e) {
    const query = document.getElementById("movieName").value; // Arama kelimesini al
    const type = document.getElementById("type").value; // Seçilen türü al
    loadMovies(query, type, e.detail); // Yeni sayfayı yükle
});

