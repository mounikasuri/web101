        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const dob = document.getElementById('dob').value;
            const acceptedTerms = document.getElementById('acceptTerms').checked;
            
            // Create new table row
            const tableBody = document.querySelector('#usersTable tbody');
            const newRow = tableBody.insertRow();
            
            // Insert cells with the collected data
            newRow.insertCell(0).textContent = name;
            newRow.insertCell(1).textContent = email;
            newRow.insertCell(2).textContent = password;
            newRow.insertCell(3).textContent = dob;
            newRow.insertCell(4).textContent = acceptedTerms ? 'true' : 'false';

            this.reset();
        });
