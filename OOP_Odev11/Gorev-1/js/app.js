import { fetchMovies, fetchMovieDetails } from './model.js'; // Model işlevlerini içe aktar
import { renderMovies, renderPagination, renderDetails } from './view.js'; // View işlevlerini içe aktar

// HTML öğelerine erişim
const form = document.getElementById('searchForm');
const movieList = document.getElementById('movieList');
const pagination = document.getElementById('pagination');
const details = document.getElementById('details');

// Form gönderildiğinde arama işlemini başlat
form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Formun varsayılan davranışını engelle (sayfa yenilenmez)
    const query = document.getElementById('movieName').value; // Kullanıcının girdiği film adı
    const type = document.getElementById('type').value; // Seçilen tür
    loadMovies(query, type, 1); // İlk sayfayı yükle
});

// Filmleri yüklemek için bir işlev
async function loadMovies(query, type, page) {
    const data = await fetchMovies(query, type, page); // Model'den film verilerini al
    if (data.Response === 'True') { // Eğer sonuç bulunduysa
        renderMovies(data.Search, movieList); // Filmleri görüntüle
        renderPagination(data.totalResults, page, pagination); // Sayfalama düğmelerini oluştur
    } else { // Eğer sonuç yoksa
        movieList.innerHTML = `<p>${data.Error}</p>`; // Hata mesajını görüntüle
        pagination.innerHTML = ''; // Sayfalama alanını temizle
    }
}

// Detay butonuna tıklandığında detayları göster
movieList.addEventListener('click', async function (e) {
    if (e.target.classList.contains('details-btn')) { // Eğer tıklanan düğme "details-btn" sınıfına sahipse
        const imdbID = e.target.dataset.id; // IMDb ID'sini al
        const detailsData = await fetchMovieDetails(imdbID); // Model'den detay verilerini al
        renderDetails(detailsData, details); // Detayları görüntüle
    }
});

// Sayfa değiştirildiğinde yeni sayfayı yükle
pagination.addEventListener('pageChange', function (e) {
    const query = document.getElementById('movieName').value; // Arama kelimesini al
    const type = document.getElementById('type').value; // Seçilen türü al
    loadMovies(query, type, e.detail); // Yeni sayfayı yükle
});
