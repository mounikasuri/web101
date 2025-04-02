document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const tableBody = document.getElementById("usersTableBody");

    // Load stored entries from localStorage
    loadEntries();

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const dob = document.getElementById("dob").value;
        const termsAccepted = document.getElementById("terms").checked ? "Yes" : "No";

        // Reset error messages
        document.getElementById("emailError").textContent = "";
        document.getElementById("dobError").textContent = "";

        // Validate email format
        if (!validateEmail(email)) {
            document.getElementById("emailError").textContent = "Please enter a valid email address.";
            return;
        }

        // Validate age range (18-55)
        if (!validateAge(dob)) {
            document.getElementById("dobError").textContent = "User must be between 18 and 55 years old.";
            return;
        }

        // Create entry object
        const entry = { name, email, dob, termsAccepted };

        // Save to localStorage
        saveEntry(entry);

        // Add entry to table
        addEntryToTable(entry);

        // Clear form fields
        form.reset();
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validateAge(dob) {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age >= 18 && age <= 55;
    }

    function saveEntry(entry) {
        let entries = JSON.parse(localStorage.getItem("entries")) || [];
        entries.push(entry);
        localStorage.setItem("entries", JSON.stringify(entries));
    }

    function loadEntries() {
        let entries = JSON.parse(localStorage.getItem("entries")) || [];
        entries.forEach(addEntryToTable);
    }

    function addEntryToTable(entry) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.email}</td>
            <td>${entry.dob}</td>
            <td>${entry.termsAccepted}</td>
        `;
        tableBody.appendChild(newRow);
    }
});

