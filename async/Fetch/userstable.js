const apiURL = 'https://643ecf8ec72fda4a0b01bc66.mockapi.io/api/v1/users';
function fetchUsers() {
    return new Promise((resolve, reject) => {
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    console.error('Error en la respuesta de la API');
                }
                return response.json();
            })
            .then(users => {
                resolve(users);
            })
            .catch(error => {
                console.error('Hubo un problema al obtener los usuarios:', error);
                reject(error);
            });
    });
}

function generateTable(users) {
    const tbody = document.querySelector('#usersTable tbody');
    tbody.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
        `;
        tbody.appendChild(row);
    });
}

function filterUsers(users, role) {
    if (role) {
        return users.filter(user => user.role === role);
    }
    return users;
}
document.addEventListener('DOMContentLoaded', () => {
    let usersData = [];
    fetchUsers()
        .then(users => {
            usersData = users;
            generateTable(usersData);
        })
        .catch(error => {
            console.error('No se pudieron cargar los usuarios:', error);
        });
    document.getElementById('roleFilter').addEventListener('change', (event) => {
        const selectedRole = event.target.value; 
        const filteredUsers = filterUsers(usersData, selectedRole);
        generateTable(filteredUsers);
    });
});
