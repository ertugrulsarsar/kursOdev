// Filmleri listelemek için bir işlev (movies: film dizisi, container: HTML elemanı)
export function renderMovies(movies, container) {
    container.innerHTML = ''; // Listeyi temizle, eski içerikleri kaldır

    // Film listesini döngüyle oluştur
    movies.forEach(movie => {
        // Her film için bir kart (div) oluştur
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item'; // CSS sınıfı ekle

        // Film kartının içeriğini oluştur
        movieItem.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150x200'}" 
                 alt="${movie.Title}" 
                 class="movie-poster"> <!-- Film posteri -->
            <div class="movie-info">
                <span>${movie.Title} (${movie.Year})</span> <!-- Film başlığı ve yılı -->
                <button data-id="${movie.imdbID}" class="details-btn">Detay</button> <!-- Detay butonu -->
            </div>
        `;

        // Oluşturulan kartı konteyner içine ekle
        container.appendChild(movieItem);
    });
}

// Sayfalama düğmelerini oluşturmak için bir işlev
export function renderPagination(totalResults, currentPage, container) {
    const totalPages = Math.ceil(totalResults / 10); // Toplam sayfa sayısını hesapla
    container.innerHTML = ''; // Mevcut sayfa düğmelerini temizle
    const maxVisibleButtons = 5; // Maksimum görünür düğme sayısı

    // Başlangıç ve bitiş sayfa numaralarını hesapla
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    // Sayfa aralığını düzenle (örneğin, 1...4,5,6...10)
    if (endPage - startPage < maxVisibleButtons - 1) {
        startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    // İlk sayfa düğmesi
    if (startPage > 1) {
        const firstButton = document.createElement('button'); // İlk sayfa düğmesi oluştur
        firstButton.textContent = '1'; // Düğme içeriği
        firstButton.addEventListener('click', () => {
            container.dispatchEvent(new CustomEvent('pageChange', { detail: 1 })); // Sayfa değiştirme olayı
        });
        container.appendChild(firstButton);

        // İlk sayfa ile aralık arasında "..." ekle
        if (startPage > 2) {
            const dots = document.createElement('span');
            dots.textContent = '...';
            dots.style.margin = '0 5px';
            container.appendChild(dots);
        }
    }

    // Orta düğmeler (şu anki sayfa etrafındaki düğmeler)
    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button'); // Sayfa düğmesi oluştur
        button.textContent = i; // Düğme içeriği
        button.disabled = i === currentPage; // Mevcut sayfa düğmesini devre dışı bırak
        button.addEventListener('click', () => {
            container.dispatchEvent(new CustomEvent('pageChange', { detail: i })); // Sayfa değiştirme olayı
        });
        container.appendChild(button);
    }

    // Son sayfa düğmesi
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const dots = document.createElement('span');
            dots.textContent = '...';
            dots.style.margin = '0 5px';
            container.appendChild(dots);
        }

        const lastButton = document.createElement('button'); // Son sayfa düğmesi oluştur
        lastButton.textContent = totalPages; // Düğme içeriği
        lastButton.addEventListener('click', () => {
            container.dispatchEvent(new CustomEvent('pageChange', { detail: totalPages })); // Sayfa değiştirme olayı
        });
        container.appendChild(lastButton);
    }
}

// Film detaylarını görüntülemek için bir işlev
export function renderDetails(details, container) {
    // Eğer detaylar eksikse veya bir hata varsa, bir hata mesajı göster
    if (!details || details.Response === 'False') {
        container.style.display = 'block';
        container.innerHTML = '<p>Detaylar bulunamadı.</p>'; // Hata mesajı
        return;
    }

    container.style.display = 'block'; // Detay alanını görünür yap
    container.innerHTML = `
        <h2>${details.Title} (${details.Year})</h2> <!-- Film başlığı ve yılı -->
        <p>${details.Plot}</p> <!-- Filmin konusu -->
        <p><strong>Yönetmen:</strong> ${details.Director}</p> <!-- Yönetmen bilgisi -->
        <p><strong>Tür:</strong> ${details.Genre}</p> <!-- Tür bilgisi -->
        <p><strong>Oyuncular:</strong> ${details.Actors}</p> <!-- Oyuncular -->
    `;
}
