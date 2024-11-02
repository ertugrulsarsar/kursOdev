let lastSelectedItem = null;

function selectItem(event, item) {
    const isCtrlPressed = event.ctrlKey;
    const isShiftPressed = event.shiftKey;

    if (isCtrlPressed) {
        // Ctrl tuşuna basılıysa, öğeyi seçime ekle/çıkar
        item.classList.toggle('selected');
    } else if (isShiftPressed && lastSelectedItem) {
        // Shift tuşuna basılıysa ve daha önce bir öğe seçildiyse, aralıktaki tüm öğeleri seç
        const items = Array.from(document.querySelectorAll('#bookList li'));
        const startIndex = items.indexOf(lastSelectedItem);
        const endIndex = items.indexOf(item);
        const [min, max] = [Math.min(startIndex, endIndex), Math.max(startIndex, endIndex)];

        items.slice(min, max + 1).forEach((li) => li.classList.add('selected'));
    } else {
        // Sadece tıklama varsa, diğer seçilen öğeleri temizle ve öğeyi seç
        document.querySelectorAll('#bookList .selected').forEach((li) => li.classList.remove('selected'));
        item.classList.add('selected');
    }

    // Son seçilen öğeyi güncelle
    lastSelectedItem = item;
}