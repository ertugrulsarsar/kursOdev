// OMDB API anahtarı ve URL'si
export const API_KEY = '4fdca78f'; // OMDB'den alınan API anahtarı
export const API_URL = 'http://www.omdbapi.com/'; // API'nin temel URL'si

// Filmleri aramak için bir işlev (query: arama kelimesi, type: tür, page: sayfa numarası)
export async function fetchMovies(query, type, page) {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${query}&type=${type}&page=${page}`);
    const data = await response.json(); // Gelen yanıtı JSON formatına dönüştür
    return data; // Filmleri veya hata mesajını döndür
}

// Belirli bir film için detay bilgilerini almak için işlev (imdbID: filmin benzersiz ID'si)
export async function fetchMovieDetails(imdbID) {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&i=${imdbID}`);
    const data = await response.json(); // Gelen yanıtı JSON formatına dönüştür
    return data; // Film detaylarını döndür
}