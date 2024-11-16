// OMDB API anahtarı ve URL'si
export const API_KEY = '4fdca78f'; // OMDB'den alınan API anahtarı
export const API_URL = 'http://www.omdbapi.com/'; // API'nin temel URL'si

// Filmleri aramak için bir işlev
export async function fetchMovies(query, type, page) {
    try {
        // API'ye GET isteği gönderiliyor
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${query}&type=${type}&page=${page}`);
        
        // HTTP isteğinin başarılı olup olmadığını kontrol et
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Hata durumu için bir mesaj oluştur
        }

        // API'den dönen yanıtı JSON formatına dönüştür
        const data = await response.json();

        // API'nin hata yanıtını kontrol et
        if (data.Response === 'False') {
            throw new Error(data.Error); // API'nin döndürdüğü hata mesajını yakala
        }

        return data; // Filmleri döndür
    } catch (error) {
        // Bir hata oluşursa konsola yazdır
        console.error('Error fetching movies:', error);

        // Hata durumunda uygun bir mesaj döndür
        return { Response: 'False', Error: error.message };
    }
}

// Belirli bir film için detay bilgilerini almak için işlev
export async function fetchMovieDetails(imdbID) {
    try {
        // IMDb ID'sine göre API'ye GET isteği gönderiliyor
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&i=${imdbID}`);
        
        // HTTP isteğinin başarılı olup olmadığını kontrol et
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Hata durumu için bir mesaj oluştur
        }

        // API'den dönen yanıtı JSON formatına dönüştür
        const data = await response.json();

        // API'nin hata yanıtını kontrol et
        if (data.Response === 'False') {
            throw new Error(data.Error); // API'nin döndürdüğü hata mesajını yakala
        }

        return data; // Film detaylarını döndür
    } catch (error) {
        // Bir hata oluşursa konsola yazdır
        console.error('Error fetching movie details:', error);

        // Hata durumunda uygun bir mesaj döndür
        return { Response: 'False', Error: error.message };
    }
}
