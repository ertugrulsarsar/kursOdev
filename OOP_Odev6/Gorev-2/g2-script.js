document.querySelectorAll('.expandable').forEach(function(item) {
    item.addEventListener('click', function(event) {
        // Alt klasörleri genişlet veya daralt
        const sublist = this.querySelector('ul');
        if (sublist) {
            sublist.style.display = sublist.style.display === 'none' ? 'block' : 'none';
            this.classList.toggle('expanded'); // Ok simgesini döndür
        }
        // Tıklamayı alt elemanlara yayılmasını engelle
        event.stopPropagation();
    });
});