// Filmleri listelemek için bir işlev (movies: film dizisi, container: HTML elemanı)
export function renderMovies(movies, container) {
    container.innerHTML = ''; // Önce mevcut içeriği temizle, eski filmler varsa kaldır

    movies.forEach(movie => {
        // Her film için bir kart (div) oluştur
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item'; // Film kartı için bir sınıf ekle

        // Kartın içeriğini (poster, başlık, detay butonu) doldur
        movieItem.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150x200'}" 
                 alt="${movie.Title}" 
                 class="movie-poster"> <!-- Eğer poster yoksa bir yer tutucu görsel kullan -->
            <div class="movie-info">
                <span>${movie.Title} (${movie.Year})</span> <!-- Film başlığı ve yayın yılı -->
                <button data-id="${movie.imdbID}" class="details-btn">Details</button> <!-- Detay butonu -->
            </div>
        `;

        container.appendChild(movieItem); // Kartı film listesinin bulunduğu kapsayıcıya ekle
    });
}

// Sayfa düğmelerini oluşturmak için bir işlev (totalResults: toplam sonuç sayısı, currentPage: mevcut sayfa)
export function renderPagination(totalResults, currentPage, container) {
    const totalPages = Math.ceil(totalResults / 10); // Toplam sayfa sayısını hesapla (her sayfa 10 sonuç içerir)
    container.innerHTML = ''; // Mevcut sayfa düğmelerini temizle
    const maxVisibleButtons = 5; // Aynı anda en fazla kaç sayfa düğmesi gösterileceğini belirle

    // Sayfa düğmeleri için başlangıç ve bitiş noktalarını hesapla
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2)); // Başlangıç sayfasını belirle
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1); // Bitiş sayfasını belirle

    // Eğer toplam sayfa sayısı görünür düğme sayısından azsa, aralığı ayarla
    if (endPage - startPage < maxVisibleButtons - 1) {
        startPage = Math.max(1, endPage - maxVisibleButtons + 1); // Sayfa aralığını düzenle
    }

    // İlk sayfa düğmesi
    if (startPage > 1) {
        const firstButton = document.createElement('button'); // İlk sayfa için bir düğme oluştur
        firstButton.textContent = '1'; // Düğme içeriği: "1"
        firstButton.addEventListener('click', () => {
            container.dispatchEvent(new CustomEvent('pageChange', { detail: 1 })); // Sayfa değiştirme olayını tetikle
        });
        container.appendChild(firstButton); // İlk sayfa düğmesini ekle

        // Eğer arada sayfa boşluğu varsa "..." ekle
        if (startPage > 2) {
            const dots = document.createElement('span');
            dots.textContent = '...'; // "..." ifadesi
            dots.style.margin = '0 5px'; // Küçük bir boşluk ekle
            container.appendChild(dots); // "..." sembolünü ekle
        }
    }

    // Orta düğmeler (mevcut sayfa ve çevresindeki sayfalar)
    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button'); // Sayfa düğmesi oluştur
        button.textContent = i; // Düğme içeriği: sayfa numarası
        button.disabled = i === currentPage; // Mevcut sayfa düğmesini devre dışı bırak
        button.addEventListener('click', () => {
            container.dispatchEvent(new CustomEvent('pageChange', { detail: i })); // Sayfa değiştirme olayını tetikle
        });
        container.appendChild(button); // Düğmeyi ekle
    }

    // Son sayfa düğmesi
    if (endPage < totalPages) {
        // Eğer arada sayfa boşluğu varsa "..." ekle
        if (endPage < totalPages - 1) {
            const dots = document.createElement('span');
            dots.textContent = '...'; // "..." ifadesi
            dots.style.margin = '0 5px'; // Küçük bir boşluk ekle
            container.appendChild(dots); // "..." sembolünü ekle
        }

        const lastButton = document.createElement('button'); // Son sayfa düğmesi oluştur
        lastButton.textContent = totalPages; // Düğme içeriği: toplam sayfa numarası
        lastButton.addEventListener('click', () => {
            container.dispatchEvent(new CustomEvent('pageChange', { detail: totalPages })); // Sayfa değiştirme olayını tetikle
        });
        container.appendChild(lastButton); // Son sayfa düğmesini ekle
    }
}

// "Daha Fazla" butonunu güncellemek için bir işlev
export function updateMoreButton(moreButton, totalResults, currentPage) {
    // Eğer mevcut sayfa * 10 toplam sonuçtan küçükse, "Daha Fazla" butonunu göster
    if (currentPage * 10 < totalResults) {
        moreButton.style.display = 'block'; // "Daha Fazla" butonunu görünür yap
    } else {
        moreButton.style.display = 'none'; // Aksi halde gizle
    }
}

// Film detaylarını görüntülemek için bir işlev
export function renderDetails(details, container) {
    container.style.display = 'block'; // Detay alanını görünür yap
    container.innerHTML = `
        <h2>${details.Title} (${details.Year})</h2> <!-- Film başlığı ve yayın yılı -->
        <p>${details.Plot}</p> <!-- Film konusu -->
        <p><strong>Yönetmen:</strong> ${details.Director}</p> <!-- Yönetmen bilgisi -->
        <p><strong>Tür:</strong> ${details.Genre}</p> <!-- Tür bilgisi -->
        <p><strong>Oyuncular:</strong> ${details.Actors}</p> <!-- Oyuncular -->
    `;
}
