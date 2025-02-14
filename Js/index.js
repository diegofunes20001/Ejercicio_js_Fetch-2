fetch('https://api.escuelajs.co/api/v1/categories')
    .then(response => response.json())
        .then(data => {
        let tabla ="";

            data.forEach(user => {
                tabla += `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.image}</td>
                        <td>${user.creationAt}</td>
                        <td>${user.updatedAt}</td>
                    </tr>
                
                `
            })

        document.getElementById('tblUsers').innerHTML = tabla;
        })