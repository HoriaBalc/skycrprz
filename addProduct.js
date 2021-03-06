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
        if (res.ok) {
            res.json().then(data => {
                console.log(data);
                let select = document.querySelector("#category");
                for (let i = 0; i < data.length; i++) {
                    let option = document.createElement("option");
                    //option.value = i + 1;
                    option.text = data[i].name;
                    select.appendChild(option);

                }
            });
        } else console.log("Fail");

    })
    .catch(error => {
        console.log('Error');
    })


localStorage.setItem('ID', 5);



function addProd() {
    let id = localStorage.getItem('ID');
    id++;
    let name = document.getElementById("nume").value;
    let description = document.getElementById("descriere").value;
    let price = document.getElementById("pret").value;
    price++;
    price--;
    let quantity = document.getElementById("cantitate").value;
    quantity++;
    quantity--;
    let phoneNumber = "string";



    let shop = 0;
    let category = document.getElementById("category").value;
    let image = "string";


    let data = {
        id,
        name,
        description,
        price,
        quantity,
        phoneNumber,
        shop,
        category,
        image
    }

    fetch('https://skyscraprzceresapp.azurewebsites.net/Products/AddProduct', {
            method: 'POST',
            cache: 'no-cache',
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json',
                'charset': "utf-8",
                'accept': '*/*',
                'Access-Control-Allow-Origin': '*',
                'Origin': '*',

                'content-encoding': 'gzip'
            },

            body: JSON.stringify(data)
        }).then(res => {


            if (res.ok && data.name !== "" && data.description !== "" && data.quantity !== "" && data.price !== "") {
                if (res.status === 200) {

                    localStorage.setItem('ID', id);
                    alert("Produsul tau a fost adaugat cu success");
                    let prod = { name: data.name, description: data.description, quantity: data.quantity, price: data.price };
                    console.log(prod);
                    //functie repetitiva care sa verifice daca e schimbat sau nu in session storage id
                    localStorage.setItem('name', data.name);
                    localStorage.setItem('description', data.description);
                    localStorage.setItem('price', data.price);
                    localStorage.setItem('quantity', data.quantity);
                    localStorage.setItem('category', category);
                    window.location.replace('./producer-product.html');

                }
            } else {
                alert("A avut loc o eroare");
            }

        })
        .catch(error => {
            console.log('Error');
        })

}