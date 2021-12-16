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

            console.log(res.status);
            console.log(res);
            console.log(data.phoneNumber + data.shop + data.category + data.image);

            if (res.ok) {
                if (res.status === 200) {

                    localStorage.setItem('ID', id);
                    alert("Produsul tau a fost adaugat cu success");
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