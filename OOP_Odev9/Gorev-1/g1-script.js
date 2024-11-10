document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && message) {
        const timeStamp = new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString();

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        
        const nameParagraph = document.createElement("p");
        nameParagraph.classList.add("name");
        nameParagraph.textContent = name;
        
        const messageParagraph = document.createElement("p");
        messageParagraph.textContent = message;
        
        const timeParagraph = document.createElement("p");
        timeParagraph.classList.add("timestamp");
        timeParagraph.textContent = timeStamp;
        
        messageDiv.appendChild(nameParagraph);
        messageDiv.appendChild(messageParagraph);
        messageDiv.appendChild(timeParagraph);
        
        document.getElementById("messageList").appendChild(messageDiv);
        
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
    } else {
        alert("Lütfen tüm alanları doldurun!");
    }
});