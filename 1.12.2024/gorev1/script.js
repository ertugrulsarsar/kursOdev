// Parsley Validator Custom Rule for Forbidden Usernames
window.Parsley.addValidator('notusername', {
    validateString: function(value) {
        const forbidden = ['admin', 'kullanıcı', 'test'];
        return !forbidden.some(word => value.toLowerCase().includes(word));
    },
    messages: {
        tr: 'Bu kullanıcı adı yasaktır.'
    }
});

// Password Strength Checker
const strengthText = ["Çok Kolay", "Kolay", "Normal", "Zor"];
document.getElementById("password").addEventListener("input", function () {
    const password = this.value;
    let strength = 0;

    // Check password length
    if (password.length >= 6) strength++;

    // Check for uppercase letter
    if (/[A-Z]/.test(password)) strength++;

    // Check for a digit
    if (/\d/.test(password)) strength++;

    // Check for special character
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    // Set the password strength level
    const passwordStrength = strengthText[strength] || "Çok Kolay";

    // Display the password strength
    document.getElementById("passwordStrength").textContent = `Şifre Güvenliği: ${passwordStrength}`;
});

// Handle the Register Form Submission
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if ($(this).parsley().isValid()) {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const passwordStrength = document.getElementById("passwordStrength").textContent;

        // Display the user data in a table
        const table = document.createElement("table");
        const thead = table.createTHead();
        const row = thead.insertRow();
        ["Kullanıcı Adı", "E-posta", "Şifre Güvenliği"].forEach(text => {
            const th = document.createElement("th");
            th.textContent = text;
            row.appendChild(th);
        });

        const tbody = table.createTBody();
        const bodyRow = tbody.insertRow();
        [username, email, passwordStrength].forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            bodyRow.appendChild(td);
        });

        // Append the table to the body
        document.body.appendChild(table);
        
        // Reset the form
        registerForm.reset();
    }
});

// Second Form: User Information Form
const userInfoForm = document.getElementById("userInfoForm");
userInfoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if ($(this).parsley().isValid()) {
        const fullName = document.getElementById("fullName").value;
        const avatar = document.getElementById("avatar").files[0]?.name || "Yok";
        const birthday = document.getElementById("birthday").value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value;

        // Display the user info in a table
        const table = document.createElement("table");
        const thead = table.createTHead();
        const row = thead.insertRow();
        ["Tam Ad", "Avatar", "Doğum Günü", "Cinsiyet"].forEach(text => {
            const th = document.createElement("th");
            th.textContent = text;
            row.appendChild(th);
        });

        const tbody = table.createTBody();
        const bodyRow = tbody.insertRow();
        [fullName, avatar, birthday, gender].forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            bodyRow.appendChild(td);
        });

        // Append the table to the body
        document.body.appendChild(table);
        
        // Reset the form
        userInfoForm.reset();
    }
});

// Parsley Validator for the Second Form (User Info)
$('#userInfoForm').parsley();
