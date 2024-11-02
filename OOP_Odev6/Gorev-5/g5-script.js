let sortDirection = true; // true = artan, false = azalan

        function sortTable(columnIndex) {
            const table = document.getElementById("myTable");
            const rows = Array.from(table.rows).slice(1); // Başlık satırını atla
            const isNumericColumn = columnIndex === 2; // Yaş sütunu

            // Sıralama
            rows.sort((a, b) => {
                const aText = a.cells[columnIndex].innerText;
                const bText = b.cells[columnIndex].innerText;

                if (isNumericColumn) {
                    // Yaş sütunu için sayısal karşılaştırma
                    return sortDirection ? parseInt(aText) - parseInt(bText) : parseInt(bText) - parseInt(aText);
                } else {
                    // Diğer sütunlar için alfabik karşılaştırma
                    return sortDirection ? aText.localeCompare(bText) : bText.localeCompare(aText);
                }
            });

            // Yeni sıralı satırları tabloya ekle
            rows.forEach(row => table.appendChild(row));
            sortDirection = !sortDirection; // Sıralama yönünü değiştir
        }