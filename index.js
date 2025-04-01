        document.addEventListener('DOMContentLoaded', function() {
            // Load existing users from localStorage
            loadUsers();
            
            // Form submission handler
            document.getElementById('registrationForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Validate email
                const email = document.getElementById('email').value;
                if (!validateEmail(email)) {
                    document.getElementById('emailError').textContent = 'Please enter a valid email address';
                    return;
                } else {
                    document.getElementById('emailError').textContent = '';
                }
                
                // Validate age (18-55 years)
                const dob = new Date(document.getElementById('dob').value);
                const age = calculateAge(dob);
                if (age < 18 || age > 55) {
                    document.getElementById('dobError').textContent = 'You must be between 18 and 55 years old';
                    return;
                } else {
                    document.getElementById('dobError').textContent = '';
                }
                
                // Create user object
                const user = {
                    name: document.getElementById('name').value,
                    email: email,
                    password: document.getElementById('password').value,
                    dob: document.getElementById('dob').value,
                    acceptedTerms: document.getElementById('terms').checked ? 'Yes' : 'No'
                };
                
                // Save user
                saveUser(user);
                
                // Add user to table
                addUserToTable(user);
                
                // Reset form
                this.reset();
            });
        });
        
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
        
        function calculateAge(dob) {
            const today = new Date();
            let age = today.getFullYear() - dob.getFullYear();
            const monthDiff = today.getMonth() - dob.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
                age--;
            }
            
            return age;
        }
        
        function saveUser(user) {
            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        }
        
        function loadUsers() {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.forEach(user => addUserToTable(user));
        }
        
        function addUserToTable(user) {
            const tableBody = document.getElementById('usersTableBody');
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>${user.dob}</td>
                <td>${user.acceptedTerms}</td>
            `;
            
            tableBody.appendChild(row);
        }
    </script>
