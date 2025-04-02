   const form = document.getElementById("registrationForm");
    const tableBody = document.getElementById("usersTableBody");


    loadEntries();

    form.addEventListener("submit", function (event) {
@@ -13,33 +13,30 @@ document.addEventListener("DOMContentLoaded", function () {
        const password = document.getElementById("password").value;
        const dob = document.getElementById("dob").value;
        const termsAccepted = document.getElementById("terms").checked ? "Yes" : "No";

        document.getElementById("emailError").textContent = "";
        document.getElementById("dobError").textContent = "";


        if (!validateEmail(email)) {
            document.getElementById("emailError").textContent = "Please enter a valid email address.";
            return;


        }


        if (!validateAge(dob)) {
            document.getElementById("dobError").textContent = "User must be between 18 and 55 years old.";
            return;


        }


        const entry = { name, email, dob, termsAccepted };

 
        saveEntry(entry);




        addEntryToTable(entry);
        form.reset();
    });

@@ -75,7 +72,6 @@ document.addEventListener("DOMContentLoaded", function () {
        newRow.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.email}</td>

            <td>${entry.dob}</td>
            <td>${entry.termsAccepted}</td>
        `;
