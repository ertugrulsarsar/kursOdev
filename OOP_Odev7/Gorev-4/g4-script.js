function addComment() {
    // Form alanlarından veri al
    const username = document.getElementById('username').value.trim();
    const commentText = document.getElementById('commentText').value.trim();
    const commentsContainer = document.getElementById('comments');
    
    // Alanların boş olup olmadığını kontrol et
    if (!username || !commentText) {
        alert("Lütfen kullanıcı adı ve yorum alanlarını doldurunuz.");
        return; // İşlemi durdur
    }

    // Tarihi al ve biçimlendir
    const date = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

    // Yeni yorum elemanı oluştur
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `
        <p class="username">${username}</p>
        <p class="date">${date}</p>
        <p>${commentText}</p>
    `;

    // Yeni yorumu yorumlar listesine ekle
    commentsContainer.appendChild(commentElement);

    // Formu temizle
    document.getElementById('commentForm').reset();
}