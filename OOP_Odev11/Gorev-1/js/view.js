// Filmleri listelemek için bir işlev (movies: film dizisi, container: HTML elemanı)
export function renderMovies(movies, container) {
    container.innerHTML = ''; // Listeyi temizle
    movies.forEach(movie => {
        const movieItem = document.createElement('div'); // Film için bir kapsayıcı div oluştur
        movieItem.className = 'movie-item'; // CSS sınıfını ekle

        // Görsel, başlık ve buton içeren film kartını oluştur
        movieItem.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}" 
                 alt="${movie.Title}" 
                 class="movie-poster">
            <div class="movie-info">
                <span>${movie.Title} (${movie.Year})</span>
                <button data-id="${movie.imdbID}" class="details-btn">Details</button>
            </div>
        `;

        container.appendChild(movieItem); // Filmi listeye ekle
    });
}

// Sayfalama düğmelerini oluşturmak için bir işlev
export function renderPagination(totalResults, currentPage, container) {
    const totalPages = Math.ceil(totalResults / 10); // Toplam sayfa sayısını hesapla
    container.innerHTML = ''; // Sayfalama alanını temizle
    const maxVisibleButtons = 5; // Görünür düğme sayısını sınırlandır

    // Başlangıç ve bitiş aralığını hesapla
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    // Düğmeler aralığını ayarla
    if (endPage - startPage < maxVisibleButtons - 1) {
        startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    // İlk sayfa düğmesi
    if (startPage > 1) {
        const firstButton = document.createElement('button');
        firstButton.textContent = '1';
        firstButton.addEventListener('click', () => {
            container.dispatchEvent(new CustomEvent('pageChange', { detail: 1 }));
        });
        container.appendChild(firstButton);

        if (startPage > 2) {
            const dots = document.createElement('span');
            dots.textContent = '...';
            dots.style.margin = '0 5px';
            container.appendChild(dots);
        }
    }

    // Orta düğmeler
    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.disabled = i === currentPage; // Mevcut sayfa düğmesini devre dışı bırak
        button.addEventListener('click', () => {
            container.dispatchEvent(new CustomEvent('pageChange', { detail: i }));
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

        const lastButton = document.createElement('button');
        lastButton.textContent = totalPages;
        lastButton.addEventListener('click', () => {
            container.dispatchEvent(new CustomEvent('pageChange', { detail: totalPages }));
        });
        container.appendChild(lastButton);
    }
}

// Film detaylarını görüntülemek için bir işlev
export function renderDetails(details, container) {
    container.style.display = 'block'; // Detay alanını görünür yap
    container.innerHTML = `
        <h2>${details.Title} (${details.Year})</h2> <!-- Başlık ve yıl -->
        <p>${details.Plot}</p> <!-- Konu -->
        <p><strong>Yönetmen:</strong> ${details.Director}</p> <!-- Yönetmen -->
        <p><strong>Tür:</strong> ${details.Genre}</p> <!-- Tür -->
        <p><strong>Oyuncular:</strong> ${details.Actors}</p> <!-- Oyuncular -->
    `;
}
