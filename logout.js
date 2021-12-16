function logout() {
    localStorage.setItem("login", "");

    fetch('https://skyscraprzceresapp.azurewebsites.net/Products/GetCategories', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'charset': "utf-8",
                'accept': '*/*',
                'Access-Control-Allow-Origin': '*',
                'Origin': '*',

                'content-encoding': 'gzip'
            },
        })
        .then(res => {
            console.log(res.status);
            if (res.ok) {
                res.json().then(data => {
                    window.location.replace('./');
                });
            }
        })

}